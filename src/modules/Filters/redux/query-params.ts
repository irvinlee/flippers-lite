import { createReducer } from '@reduxjs/toolkit';
import { IQueryParams } from '../types';

const initialState: IQueryParams = {
  listing_status: [],
  monetization: [],
  niche: [],  
  page: 1,
  limit: 50,
};

export default createReducer(initialState, builder => {
  
});
