import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Dashboard, Login } from '../pages';
import PublicRoutes from './PublicRoutes';
import PrivateRoute from './PrivateRoute';

const Routes = () => (
  <Router>
    <Switch>
      <PrivateRoute
        exact
        path="/admin"
        component={Dashboard}
        title="Friend Profile"
      />
      <PublicRoutes exact path="/" component={Login} title="Login" />
    </Switch>
  </Router>
);

export default Routes;
