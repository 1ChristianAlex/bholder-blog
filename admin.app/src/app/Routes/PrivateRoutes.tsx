import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { DashboardContainer } from '../../components';
import { privateRoutes } from './RoutesNames';
import { Posts } from '../../features';

const PrivateRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path={privateRoutes.dashboard}>
        <DashboardContainer>
          <Switch>
            <Route exact path={privateRoutes.dashboard}>
              asd
            </Route>
            <Route path={privateRoutes.posts}>
              <Posts />
            </Route>
          </Switch>
        </DashboardContainer>
      </Route>
    </Switch>
  );
};

export default PrivateRoutes;
