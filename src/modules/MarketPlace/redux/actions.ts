import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getApiUrl } from '../../common/utils/helpers';
import { IListing } from '../modules/Listing/types';
import { IFilterSet, IQueryResultMetaData } from '../types';

export const setMarketPlaceListings = createAction('marketplace/set_listings', (listings: Array<IListing>, metaData: IQueryResultMetaData) => {
  return {
    payload: {
      listings,
      metaData
    }
  }
});

export const fetchListings = (requestParams: IFilterSet) => createAsyncThunk(
  'marketplace/fetch_listings',
  async(_params, thunkApi) => {
    const results = await axios.get(`${getApiUrl('v1')}/listings/list`, {
      params: {...requestParams}
    }).then(result => result.data.data)
      .catch(e => console.warn('Failed to fetch listings'));
    
    const { listings, ...queryMetaData } = results;

    thunkApi.dispatch(setMarketPlaceListings(results?.listings || [], queryMetaData));    
  }
);
