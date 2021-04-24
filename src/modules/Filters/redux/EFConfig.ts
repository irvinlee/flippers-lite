import { loadMonetizations, loadNiches } from './actions';
import { createReducer } from '@reduxjs/toolkit';
import { IEFConfig } from '../types';
import { RequestStatus } from '../../common/types';

const initialState: IEFConfig = {  
  niches: [],
  monetizations: [],
  requestStatus: RequestStatus.notStarted,  
};

export default createReducer(initialState, builder => {
  builder.addCase(loadMonetizations, (state, action) => ({
    ...state,
    monetizations: action.payload.monetizations
  }));
  builder.addCase(loadNiches, (state, action) => ({
    ...state,
    niches: action.payload.niches
  }));
  builder.addCase('efconfig/fetch/pending', state => ({...state, requestStatus: RequestStatus.pending}));
  builder.addCase('efconfig/fetch/fulfilled', state => ({...state, requestStatus: RequestStatus.fulfilled}));
});
