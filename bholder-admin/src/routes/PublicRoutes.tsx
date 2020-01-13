import React from 'react';
import { Route } from 'react-router-dom';
import { IRoutes } from '../interfaces/IProps';

const PrivateRoute: React.FC<IRoutes> = ({ component, ...rest }) => (
  <Route component={component} {...rest} />
);

export default PrivateRoute;
