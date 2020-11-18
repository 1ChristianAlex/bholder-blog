import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LoginPage } from '../../features';

const PublicRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <h1>Hello world</h1>
      </Route>
      <Route exact path="/login">
        <LoginPage />
      </Route>
    </Switch>
  );
};

export default PublicRoutes;
