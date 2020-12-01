import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { LoginPage } from '../../features';
import { publicRoutes } from './RoutesNames';

const PublicRoutes: React.FC = () => {
  return (
    <Switch>
      <Route exact path={publicRoutes.login}>
        <LoginPage />
      </Route>
      <Redirect exact path="/" to={publicRoutes.login} />
      <Route>Not found</Route>
    </Switch>
  );
};

export default PublicRoutes;
