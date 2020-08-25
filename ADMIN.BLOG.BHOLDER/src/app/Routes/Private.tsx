import React, { useEffect } from 'react';
import { Route, RouteProps, useHistory } from 'react-router-dom';

const PrivateRoutes: React.FC<RouteProps> = (props) => {
  const history = useHistory();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      history.push('/login');
    }
  }, [history]);

  return <Route {...props} />;
};

export default PrivateRoutes;
