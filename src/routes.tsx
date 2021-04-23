import {
  Switch,
  Route  
} from 'react-router-dom';

import * as Pages from './pages';

export default function Routes() {
  return (
    <Switch>
      <Route path="/">
        <Pages.Homepage />
      </Route>
    </Switch>    
  );
}
