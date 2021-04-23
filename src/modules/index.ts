import { Reducer as FiltersReducer } from './Filters';

export const rootReducer = [
  {
    key: 'filters',
    reducerFn: FiltersReducer
  }
];
