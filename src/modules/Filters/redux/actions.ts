import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IMonetization, INiche } from '../../common/types';
import { getApiUrl } from '../../common/utils/helpers';


export const loadMonetizations = createAction('efconfig/loadMonetizations', (monetizations: Array<IMonetization>) => {
  return {
    payload: {
      monetizations
    }
  }
});

export const loadNiches = createAction('efconfig/loadNiches', (niches: Array<INiche>) => {
  return {
    payload: {
      niches
    }
  }
});

export const fetchEFConfig = createAsyncThunk(
  'efconfig/fetch',
  async(_params, thunkApi) => {
    const results = await axios.get(`${getApiUrl('v1')}/ef-config`)
                    .then(result => result.data.data)
                    .catch(e => console.warn('Failed to fetch EF Config'));
    
    if(results.listing_monetizations) {
      thunkApi.dispatch(loadMonetizations(results.listing_monetizations))
    }
    if(results.listing_niches) {
      thunkApi.dispatch(loadNiches(results.listing_niches))
    }
  }
);
