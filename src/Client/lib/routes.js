import React from 'react';
import HomeComponent from './components/home/HomeComponent';
import CategoryComponent from './components/outcomeCategory/category.component';
import OutcomeItemComponent from './components/outcomeItem/outcome-item.component';
import ManageOutcomeItemComponent from './components/outcomeItem/manage-outcome-item.component';
import OutcomeComponent from './components/outcome/outcome.component';
import ManageOutcomeComponent from './components/outcome/manage-outcome.component';

import manageCategoryComponent from './components/outcomeCategory/manage-category.component';
import { Switch } from 'react-router-dom';
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
    <PrivateRoute exact path="/outcomeItems" component={OutcomeItemComponent}></PrivateRoute>
    <PrivateRoute exact path="/outcomeItems/:outcomeId" component={OutcomeItemComponent}></PrivateRoute>
    <PrivateRoute exact path="/outcomeItem/outcome/:outcomeId/:id" component={ManageOutcomeItemComponent}></PrivateRoute>
    <PrivateRoute exact path="/outcomeItem/outcome/:outcomeId" component={ManageOutcomeItemComponent}></PrivateRoute>
    <PrivateRoute exact path="/outcomeItem/:id" component={ManageOutcomeItemComponent}></PrivateRoute>
    <PrivateRoute path="/outcomes" component={OutcomeComponent}></PrivateRoute>
    <PrivateRoute exact path="/outcome" component={ManageOutcomeComponent}></PrivateRoute>
    <PrivateRoute path="/outcome/:id" component={ManageOutcomeComponent}></PrivateRoute>
    <AppRoute path="/login" component={LoginPage} layout={PublicLayout}/>
  </Switch>
);