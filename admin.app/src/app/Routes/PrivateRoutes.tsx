import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { DashboardContainer } from '../../components';
import { privateRoutes } from './RoutesNames';

const PrivateRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path={privateRoutes.dashboard}>
        <DashboardContainer>
          <Switch>
            <Route exact path={privateRoutes.dashboard}>
              asd
            </Route>
            <Route exact path={privateRoutes.posts}>
              posts
            </Route>
          </Switch>
        </DashboardContainer>
      </Route>
    </Switch>
  );
};

export default PrivateRoutes;
