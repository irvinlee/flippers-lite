import {
  Switch,
  Route,
  Redirect, 
} from 'react-router-dom';

import { ViewMode } from './modules/MarketPlace/types';
import * as Pages from './pages';

export default function Routes() {
  return (
    <Switch>      
      <Route path="/list/:page">
        <Pages.Homepage viewMode={ViewMode.table} />
      </Route>
      <Route path="/cards">
        <Pages.Homepage viewMode={ViewMode.cards}/>
      </Route>
      <Route path="/">
        <Redirect to="/list/1" />
      </Route>
    </Switch>    
  );
}
