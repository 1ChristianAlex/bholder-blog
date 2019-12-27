import { Router } from 'express';

import UserController from './controller';

const userRouter = Router();
const userRouterUrl = '/api/user';
const controller = UserController.getInstance();

userRouter.route(userRouterUrl).post(controller.create);

export default userRouter;
