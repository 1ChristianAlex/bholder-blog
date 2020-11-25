import React, { useMemo } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { DashboardContainer } from '../../components';
import { privateRoutes } from './RoutesNames';
import { Posts } from '../../features';
import Auth from '../../services/auth';
import { useSelector } from 'react-redux';
import { StoreData } from '../../redux/reduces';
import { User } from '../../models/UserModel';

const PrivateRoutes: React.FC = () => {
  const history = useHistory();

  const user = useSelector<StoreData, User>((store) => store.user);

  useMemo(() => {
    if (!user.id) {
      Auth.refreshUser().then((user) => {
        if (!user.id) {
          history.push('/login');
        }
      });
    }
  }, []);

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
