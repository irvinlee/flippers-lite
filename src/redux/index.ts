import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';

import { IReducer } from '../modules/common/types';

export default function setupStore(reducers: Array<IReducer>) {
  return configureStore({
      middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunkMiddleware),
      reducer: reducers.reduce((accumulator, current) => ({...accumulator, [current.key]: current.reducerFn}), {})
    }
  )
};
