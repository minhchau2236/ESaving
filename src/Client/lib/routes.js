import React from 'react';
import App from './components/App';
import HomeComponent from './components/home/HomeComponent';
import CategoryComponent from './components/outcomeCategory/category.component';
import OutcomeItemComponent from './components/outcomeItem/outcome-item.component';
import ManageOutcomeItemComponent from './components/outcomeItem/manage-outcome-item.component';


import manageCategoryComponent from './components/outcomeCategory/manage-category.component';
import { Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './components/auth/PrivateRoute';
import { LoginPage } from './components/auth/login.component';
import AppRoute from './components/AppRoute';
import PublicLayout from './components/PublicLayout';

export default (
  <Switch>    
    <PrivateRoute exact path="/" component={HomeComponent}></PrivateRoute>
    <PrivateRoute path="/categories" component={CategoryComponent}></PrivateRoute>
    <PrivateRoute exact path="/category" component={manageCategoryComponent}></PrivateRoute>
    <PrivateRoute path="/category/:id" component={manageCategoryComponent}></PrivateRoute>
    <PrivateRoute path="/outcomeItems" component={OutcomeItemComponent}></PrivateRoute>
    <PrivateRoute exact path="/outcomeItem" component={ManageOutcomeItemComponent}></PrivateRoute>
    <PrivateRoute path="/outcomeItem/:id" component={ManageOutcomeItemComponent}></PrivateRoute>
    <AppRoute path="/login" component={LoginPage} layout={PublicLayout}/>
  </Switch>
);