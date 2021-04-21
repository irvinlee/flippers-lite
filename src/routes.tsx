import {
  BrowserRouter as Router,
  Switch,
  Route  
} from 'react-router-dom';

import * as Pages from './pages';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Pages.Homepage />
        </Route>
      </Switch>
    </Router>
  );
}
