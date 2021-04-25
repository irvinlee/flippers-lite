import { createSelector } from 'reselect';

const selectEFConfigSubstate = (state: { filters: any; }) => state?.filters?.efConfig;
const selectFiltersConfigSubstate = (state: { filters: any; }) => state?.filters?.filtersConfig;
const selectMarketPlaceSubstate = (state: { marketplace: any; }) => state?.marketplace;

export const selectNiches = createSelector(
  [selectEFConfigSubstate],
  substate => substate?.niches
);

export const selectMonetizations = createSelector(
  [selectEFConfigSubstate],
  substate => substate?.monetizations
);

export const selectSearchString = createSelector(
  [selectFiltersConfigSubstate],
  substate => substate?.searchQuery
);

export const selectRequestStatus = createSelector(
  [selectEFConfigSubstate],
  substate => substate?.requestStatus
);

export const selectSelectedNiches = createSelector(
  [selectFiltersConfigSubstate],
  substate => substate?.selectedNiches,
);

export const selectSelectedMonetizations = createSelector(
  [selectFiltersConfigSubstate],
  substate => substate?.selectedMonetizations,
);

export const selectSelectedStatuses = createSelector(
  [selectFiltersConfigSubstate],
  substate => substate?.selectedStatuses,
);

export const selectMarketplaceMetaData = createSelector(
  [selectMarketPlaceSubstate],
  substate => ({
    count: substate?.count,
    pages: substate?.pages,
    page: substate?.page,
    limit: substate?.limit,
  })
);
