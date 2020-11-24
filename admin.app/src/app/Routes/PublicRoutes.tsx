import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LoginPage } from '../../features';
import { publicRoutes } from './RoutesNames';

const PublicRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <h1>Hello world</h1>
      </Route>
      <Route exact path={publicRoutes.login}>
        <LoginPage />
      </Route>
      <Route>Not found</Route>
    </Switch>
  );
};

export default PublicRoutes;
