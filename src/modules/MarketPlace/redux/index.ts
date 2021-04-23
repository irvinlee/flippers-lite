import { createReducer } from '@reduxjs/toolkit';
import { IListingCollection } from '../types';

const initialState: IListingCollection = {
  listings: [],
};

export default createReducer(initialState, builder => {
  
});
