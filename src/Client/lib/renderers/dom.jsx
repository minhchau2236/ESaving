import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import routes from '../routes';
import App from '../components/App';
import configureStore from '../store/configureStore';
import { Provider } from 'react-redux';
import * as outcomeCategoryActions from '../store/actions/outcomeCategoryActions';

const store = configureStore();
store.dispatch(outcomeCategoryActions.loadCategories());

ReactDOM.render(
  <BrowserRouter routes={routes}>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);