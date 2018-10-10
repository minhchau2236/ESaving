import React from 'react';
import App from './components/App';
import HomeComponent from './components/home/HomeComponent';
import CategoryComponent from './components/outcomeCategory/category.component';
import manageCategoryComponent from './components/outcomeCategory/manage-category.component';
import { Route, Switch } from 'react-router-dom';

export default (
  <Switch>
    <Route exact path="/" component={HomeComponent}></Route>
    <Route path="/categories" component={CategoryComponent}></Route>
    <Route exact path="/category" component={manageCategoryComponent}></Route>
    <Route path="/category/:id" component={manageCategoryComponent}></Route>
  </Switch>
);