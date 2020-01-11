import { Router } from 'express';

import AuthController from './auth-controller';

const AuthRouter = Router();
const AuthRouterUrl = '/auth/:token?';
const controller = AuthController.getInstance();

AuthRouter.route(AuthRouterUrl).post(controller.Login.bind(controller));

export default AuthRouter;
