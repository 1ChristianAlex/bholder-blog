import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LoginPage } from '../../features';

const PublicRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/dashboard">
        <LoginPage />
      </Route>
    </Switch>
  );
};

export default PublicRoutes;
