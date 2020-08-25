import React from 'react';
import { Route, RouteProps } from 'react-router-dom';

const PublicRoutes: React.FC<RouteProps> = (props) => {
  return <Route {...props} />;
};

export default PublicRoutes;
