import { createSelector } from 'reselect';

const selectEFConfigSubstate = (state: { filters: any; }) => state?.filters?.efconfig;
const selectMarketPlaceSubstate = (state: { marketplace: any; }) => state?.marketplace;

export const selectNiches = createSelector(
  [selectEFConfigSubstate],
  substate => substate?.niches
);

export const selectMonetizations = createSelector(
  [selectEFConfigSubstate],
  substate => substate?.monetizations
);

export const selectRequestStatus = createSelector(
  [selectEFConfigSubstate],
  substate => substate?.requestStatus
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
