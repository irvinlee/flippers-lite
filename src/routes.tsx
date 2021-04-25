import {
  Switch,
  Route,
  Redirect, 
} from 'react-router-dom';

import * as Pages from './pages';

export default function Routes() {
  return (
    <Switch>      
      <Route path="/list/:page">
        <Pages.Homepage />
      </Route>
      <Route path="/">
        <Redirect to="/list/1" />
      </Route>
    </Switch>    
  );
}
