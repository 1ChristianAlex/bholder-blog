import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PublicRoutes from './Routes/PublicRoutes';
import PrivateRoutes from './Routes/PrivateRoutes';
import { privateRoutes } from './Routes/RoutesNames';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={privateRoutes.dashboard}>
          <PrivateRoutes />
        </Route>
        <Route path="/">
          <PublicRoutes />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default AppRoutes;
