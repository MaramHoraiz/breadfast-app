import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import {paths} from './constants';

// App pages
import EditView from './pages/EditView/EditView';
import AppRoot from './pages/RootApp/RootApp';

const Router = () => (
    <Switch>
      <Route exact path={paths.EDIT} key={paths.EDIT} component={EditView} />
      <Route path={paths.APP_ROOT} key={paths.APP_ROOT} component={AppRoot} />
      <Route component={() => <Redirect to="/" />} />

    </Switch>
);

export default Router;