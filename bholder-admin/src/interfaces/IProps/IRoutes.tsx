import { RouteProps } from 'react-router-dom';
import { FC } from 'react';

export default interface IRoutes extends RouteProps {
  component: FC;
  title: string;
}
