import { Provider } from 'react-redux';
import Routes from './routes';
import configureStore from './redux';
import { rootReducer } from './modules';
import { Layout } from './components/Layout';
import {
  BrowserRouter as Router,  
} from 'react-router-dom';

const store = configureStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes />
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
