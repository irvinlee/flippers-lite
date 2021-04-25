import { createSelector } from 'reselect';
import { parseMultipleUrlParamSelections } from '../../common/utils/helpers';
import { IFilterSet } from '../types';
import { RequestStatus } from '../../common/types';

export const selectMarketplaceSubstate = (state: { marketplace: any; }) => state?.marketplace || {};
export const selectFiltersSubstate = (state: { filters: any; }) => state?.filters || {};

export const selectFiltersConfig = createSelector(
  [selectFiltersSubstate],
  substate => substate?.filtersConfig || {}
);

export const selectApiRequestParams = createSelector(
  [selectFiltersConfig],
  filtersConfig => {
    const ret: IFilterSet = {};
    const { selectedNiches, selectedMonetizations, selectedStatuses, searchQuery, limit, page } = filtersConfig;

    //niches
    if(selectedNiches.length) {
      ret.niches = parseMultipleUrlParamSelections(selectedNiches);
    }
    //monetizations
    if(selectedMonetizations.length) {
      ret.monetizations = parseMultipleUrlParamSelections(selectedMonetizations);
    }
    //statuses
    if(selectedStatuses.length) {
      ret.listing_status = parseMultipleUrlParamSelections(selectedStatuses);
    }
    if(searchQuery) {
      ret.q = searchQuery;
    }
    if(limit) {
      ret.limit = limit
    }
    if(page) {
      ret.page = page;
    }


    return ret;
  }
);

export const selectListings = createSelector(
  [selectMarketplaceSubstate],
  substate => substate?.listings || {}
);

export const selectMarketplaceMetaData = createSelector(
  [selectMarketplaceSubstate],
  substate => ({
    count: substate?.count,
    pages: substate?.pages,
    page: substate?.page,
    limit: substate?.limit,
  })
);

export const selectIsLoadingListings = createSelector(
  [selectMarketplaceSubstate],
  substate => substate?.requestStatus === RequestStatus.pending
);

