import { createReducer } from '@reduxjs/toolkit';
import { IFilterConfig } from '../types';

import { setSearchQueryValue } from './actions';

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
});
