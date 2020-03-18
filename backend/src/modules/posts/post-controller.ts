import { Request, Response } from 'express';
import PostService from './post-service';
import { IBody } from '../../Interfaces';

export default class PostController {
  constructor(private service: PostService) {}

  static getInstance() {
    return new PostController(new PostService());
  }

  async Create(req: Request, res: Response, next: Function) {
    try {
      const { post, data, currentUser } = req.body as IBody;
      const user_id = currentUser?.id;
      const newPost = { ...post, ...data, user_id };

      const result = await this.service.Create(newPost);
      res.json({ post: result });
      next();
    } catch (error) {
      res.status(400).json({ mensage: 'Error on post Creation' });
    }
  }

  async DeletePost(req: Request, res: Response, next: Function) {
    try {
      const { id } = req.params;
      const result = await this.service.DeletePost(id);

      res.json({ result });

      next();
    } catch (error) {
      res.status(404).json({ sucess: false, error });
    }
  }
  public async Update(req: Request, res: Response, next: Function) {
    try {
      const { id, post, data } = req.body;
      const postData = { ...post, ...data };
      const postUpdated = await this.service.Update(id, postData);

      res.json({ post: postUpdated });
      next();
    } catch (error) {
      res.status(404).json({ sucess: false, error });
    }
  }
  public async GetAll(req: Request, res: Response, next: Function) {
    try {
      const { query } = req;

      const postList = await this.service.GetAll(query);
      res.json({ postList });
      next();
    } catch (error) {
      res.status(404).json({ sucess: false, error });
    }
  }
  public async GetSinglePost(req: Request, res: Response, next: Function) {
    try {
      const { id } = req.params;

      const postList = await this.service.GetSinglePost(id);
      res.json({ postList });
      next();
    } catch (error) {
      res.status(404).json({ sucess: false, error });
    }
  }
}
