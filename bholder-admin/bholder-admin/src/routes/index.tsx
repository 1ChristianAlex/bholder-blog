import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Dashboard } from '../pages';
import PublicRoutes from './PublicRoutes';
import PrivateRoute from './PrivateRoute';

const Routes = () => (
  <Router>
    <Switch>
      <PrivateRoute exact path="/" component={() => <Dashboard />} title="Friend Profile" />
    </Switch>
  </Router>
);

export default Routes;
