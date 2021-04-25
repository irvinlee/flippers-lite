import { createReducer } from '@reduxjs/toolkit';
import { IFilterConfig } from '../types';

const initialState: IFilterConfig = {  
  selectedNiches: [],
  selectedMonetizations: [],
  searchQuery: '',
  selectedStatuses: [],
  limit: 20,
  page: 1,
};

export default createReducer(initialState, builder => {  
});
