import { createSelector } from 'reselect';

const selectEFConfigSubstate = (state: { filters: any; }) => state?.filters;

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
