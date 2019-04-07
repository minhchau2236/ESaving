import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import category from './category';

export default ({ match }) => (
    <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/category`} />
        <Route path={`${match.url}/category`} component={category} />
        <Redirect to="/error" />
    </Switch>
);