import { Request, Response } from "express";
import UserService from "./service";

export default class UserController {
  constructor(private UserService: UserService) {}
  async create(req: Request, res: Response, next: Function) {
    try {
      const { user } = req.body;
      const result = await this.UserService.create(user);
      res.json(result);
      next();
    } catch (error) {
      res.status(400).json("Error");
    }
  }
  static getInstance() {
    return new UserController(new UserService());
  }
}
