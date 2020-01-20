import { Request, Response } from 'express';
import { AuthService } from './auth-service';
import { IBody } from '../../Interfaces';

export default class AuthController {
  constructor(private service: AuthService) {}

  static getInstance() {
    return new AuthController(new AuthService());
  }

  async Login(req: Request, res: Response, next: Function) {
    try {
      const { login } = req.body as IBody;
      const token = await this.service.Login(login);
      res.json({...token, status:true});
      next();
    } catch (error) {
      res.status(200).json({ mensage: 'Error on Login', error, status:false });
    }
  }
}
