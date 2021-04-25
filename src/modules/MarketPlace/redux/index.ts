import { createReducer } from '@reduxjs/toolkit';
import { IListing } from '../modules/Listing/types'
import { IListingCollection } from '../types';
import { setMarketPlaceListings } from './actions';
import { RequestStatus } from '../../common/types';

const initialState: IListingCollection = {
  listings: [],  
  requestStatus: RequestStatus.notStarted,
};

export default createReducer(initialState, builder => {
  builder.addCase(setMarketPlaceListings, (state, action) => ({
    ...state,
    listings: action.payload.listings,
    ...action.payload.metaData
  }));
  builder.addCase('marketplace/fetch_listings/pending', state => ({...state, requestStatus: RequestStatus.pending}));
  builder.addCase('marketplace/fetch_listings/fulfilled', state => ({...state, requestStatus: RequestStatus.fulfilled}));
});
