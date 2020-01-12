import { RouteProps } from 'react-router-dom';
import { FC } from 'react';

interface IRoutes extends RouteProps{
    component:FC;
    title:string
}
export default IRoutes;
