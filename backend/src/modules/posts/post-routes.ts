import { Router } from 'express';
import { upload, MulterUpload } from '../../middleware/';
import PostController from './post-controller';

const postRouter = Router();
const privatePostUrl = '/api/post/:id?';
const privatePostUrlQuery = '/api/post-list/:query?';

const publicPostUrl = '/post/:id?';
const publicPostUrlQuery = '/post-list/:query?';

const controller = PostController.getInstance();

// Private post routes
postRouter
  .route(privatePostUrl)
  .get(controller.GetSinglePost.bind(controller))
  .delete(controller.DeletePost.bind(controller))
  .patch(upload.any(), MulterUpload, controller.Update.bind(controller))
  .post(upload.any(), MulterUpload, controller.Create.bind(controller));
postRouter.get(privatePostUrlQuery, controller.GetAll.bind(controller));

// Public post routes
postRouter.get(publicPostUrl, controller.GetSinglePost.bind(controller));
postRouter.get(publicPostUrlQuery, controller.GetAll.bind(controller));

export default postRouter;
