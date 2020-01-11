import userRoutes from '../modules/user/user-routes';
import authRoutes from '../modules/auth/auth-routes';
import postRoutes from '../modules/posts/post-routes';
import { Router } from 'express';

const routes: Array<Router> = [userRoutes, authRoutes, postRoutes];

export default routes;
