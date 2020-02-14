import React, { FC } from "react";
import { Route, RouteProps } from "react-router-dom";

export interface IRoutes extends RouteProps {
  component: FC;
  title: string;
}

const PrivateRoute: React.FC<IRoutes> = ({ component, ...rest }) => (
  <Route component={component} {...rest} />
);

export default PrivateRoute;
