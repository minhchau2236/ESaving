import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AppRoute from '../AppRoute';
import PrivateLayout from '../PrivateLayout';

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    localStorage.getItem('user')
      ? <AppRoute {...props} layout={PrivateLayout} component={Component}/>
      : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
  )} />
);