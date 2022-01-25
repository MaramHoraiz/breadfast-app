import React from 'react';
import { Switch, Route } from 'react-router-dom';

import config from './config.json';

// App pages
import EditView from './pages/EditView/EditView';
import AppRoot from './pages/RootApp/RootApp';

const Router = () => (
    <Switch>
      <Route exact path={config.EDIT} key={config.EDIT} component={EditView} />
      <Route path={config.APP_ROOT} key={config.APP_ROOT} component={AppRoot} />
    </Switch>
);

export default Router;