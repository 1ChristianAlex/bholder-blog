import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import PublicRoutes from './Public';
import PrivateRoutes from './Private';
import Login from '../../pages/Login';

export default function AppRoutes() {
  return (
    <Router>
      <Switch>
        <PrivateRoutes component={() => <h1>login</h1>} exact path="/" />
        <PublicRoutes component={Login} exact path="/login" />
      </Switch>
    </Router>
  );
}
