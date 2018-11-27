import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router } from 'react-router-dom';
import routes from '../routes';
import App from '../components/App';
import configureStore from '../store/configureStore';
import { Provider } from 'react-redux';
import * as outcomeCategoryActions from '../store/actions/outcomeCategoryActions';
import * as outcomeItemActions from '../store/actions/outcomeItemActions';
import history from '../services/history';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/style.css';
import 'react-datepicker/dist/react-datepicker.css';

const store = configureStore();
store.dispatch(outcomeCategoryActions.loadCategories());

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Component />
      </Router>
    </Provider>,
    document.getElementById('root')
  );
};

render(App);