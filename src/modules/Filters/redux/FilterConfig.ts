import { createReducer } from '@reduxjs/toolkit';
import { IFilterConfig } from '../types';

import { setSearchQueryValue, setFilters } from './actions';

const initialState: IFilterConfig = {  
  selectedNiches: [],
  selectedMonetizations: [],
  searchQuery: '',
  selectedStatuses: [],  
};

export default createReducer(initialState, builder => {
  builder.addCase(setSearchQueryValue, (state, action) => ({
  ...state,
    searchQuery: action.payload.q
  }));
  builder.addCase(setFilters, (state, action) => ({
    ...state,
    selectedNiches: action.payload.niches,
    selectedMonetizations: action.payload.monetizations,
    selectedStatuses: action.payload.statuses,
  }));
});
