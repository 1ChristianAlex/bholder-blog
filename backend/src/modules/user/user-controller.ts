import { Request, Response } from 'express';
import UserService from './user-service';
import { IUser, IBody } from '../../Interfaces';

export default class UserController {
  constructor(private service: UserService) {}

  static getInstance() {
    return new UserController(new UserService());
  }

  public async Create(req: Request, res: Response, next: Function) {
    try {
      const { user } = req.body as IBody;

      const result = await this.service.Create(user);
      res.json({ user: result });
      next();
    } catch (error) {
      res.status(400).json('Error on user Creation');
    }
  }
  public async GetUserById(req: Request, res: Response, next: Function) {
    try {
      const { id } = req.params;
      const { currentUser } = req.body as IBody;
      const result = await this.service.GetUserById(id);
      res.json({ user: result, currentUser });

      next();
    } catch (error) {
      res.status(404).json({ mensage: 'Error on get  user', error });
    }
  }
  public async DeleteUser(req: Request, res: Response, next: Function) {
    try {
      const { id } = req.params;
      const result = await this.service.DeleteUser(id);

      res.json({ result });

      next();
    } catch (error) {
      res.status(404).json({ sucess: false, error });
    }
  }
  public async Update(req: Request, res: Response, next: Function) {
    try {
      const { id, user } = req.body;
      const userUpdated = await this.service.Update(id, user);

      res.json({ user: userUpdated });
      next();
    } catch (error) {
      res.status(404).json({ sucess: false, error });
    }
  }
  public async CurrentUser(req: Request, res: Response, next: Function) {
    try {
      const { token } = req.params;

      const user = (await this.service.CurrentUser(token)) as IUser;
      res.json({ user });
      next();
    } catch (error) {
      res.status(404).json({ mensage: 'Error on get current user', error });
    }
  }
}
