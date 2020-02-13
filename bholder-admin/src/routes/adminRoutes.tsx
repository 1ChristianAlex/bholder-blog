import React from 'react';
import { Switch } from 'react-router-dom';
import { Dashboard, Posts } from 'pages';
import PrivateRoute from './PrivateRoute';

const AdminRoutes = () => (
  <Switch>
    <PrivateRoute exact path="/admin" component={Dashboard} title="Friend Profile" />
    <PrivateRoute exact path="/admin/posts/new" component={Posts} title="Friend Profile" />
  </Switch>
);

export default AdminRoutes;
