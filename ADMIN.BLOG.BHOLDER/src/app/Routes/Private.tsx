import React, { useEffect } from 'react';
import { Route, RouteProps, useHistory } from 'react-router-dom';
import { Auth } from 'services/Auth';
import { AppHeader } from 'components';

const PrivateRoutes: React.FC<RouteProps> = ({ children, ...props }) => {
  const history = useHistory();
  useEffect(() => {
    if (!Auth.isLoged()) {
      history.push('/login');
    }
  }, [history]);

  return (
    <Route {...props}>
      <AppHeader />
      {children}
    </Route>
  );
};

export default PrivateRoutes;
