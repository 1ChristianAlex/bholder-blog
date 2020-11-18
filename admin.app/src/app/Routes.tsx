import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PublicRoutes from './Routes/PublicRoutes';
import PrivateRoutes from './Routes/PrivateRoutes';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <PublicRoutes />
        </Route>
        <Route exact path="/admin">
          <PrivateRoutes />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default AppRoutes;
