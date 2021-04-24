import { combineReducers } from 'redux';
import EFConfigReducer from './EFConfig';
import FilterConfigReducer from './FilterConfig';

export default combineReducers({
  efconfig: EFConfigReducer,
  filtersConfig: FilterConfigReducer,
});
