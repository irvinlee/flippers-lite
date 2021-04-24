import { createReducer } from '@reduxjs/toolkit';
import { IFilterConfig } from '../types';

const initialState: IFilterConfig = {  
  selectedNiches: [],
  selectedMonetizations: [],
  searchQuery: '',
  selectedStatuses: [],
};

export default createReducer(initialState, builder => {  
});
