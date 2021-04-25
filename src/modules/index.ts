import { Reducer as FiltersReducer } from './Filters';
import { Reducer as MarketPlaceReducer } from './MarketPlace';

export const rootReducer = [
  {
    key: 'filters',
    reducerFn: FiltersReducer
  },
  {
    key: 'marketplace',
    reducerFn: MarketPlaceReducer
  }
];
