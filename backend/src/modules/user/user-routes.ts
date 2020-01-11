import { Router } from 'express';

import UserController from './user-controller';

const userRouter = Router();
const userRouterUrl = '/api/user/:id?';
const currentUserUrl = '/api/currentUser/:token?';
const publicUserUrl = '/user';
const controller = UserController.getInstance();

// Private User Routes
userRouter
  .route(userRouterUrl)
  .get(controller.GetUserById.bind(controller))
  .patch(controller.Update.bind(controller))
  .delete(controller.DeleteUser.bind(controller));
userRouter.get(currentUserUrl, controller.CurrentUser.bind(controller));

// Public User Routes
userRouter.post(publicUserUrl, controller.Create.bind(controller));

export default userRouter;
