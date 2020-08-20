import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import PublicRoutes from './publicRoutes';
import Login from '../../pages/Login';

export default function AppRoutes() {
  return (
    <Router>
      <Switch>
        <PublicRoutes component={Login} path="/login" />
      </Switch>
    </Router>
  );
}
