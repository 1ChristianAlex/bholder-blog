import { Controller, Post, Body, Res, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { IUser } from 'interfaces';
import { Response } from 'express';

@Controller()
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/user')
  public async CreateUser(
    @Body() user: IUser,
    @Res() res: Response,
  ): Promise<void> {
    try {
      const userCreated = await this.userService.create(user);
      res.json(userCreated);
    } catch (error) {
      console.log(error);

      res.status(500).json({ mensage: error });
    }
  }

  @Put('/user')
  async updateUser(@Body() user: IUser, @Res() res: Response): Promise<void> {
    try {
      const { id, ...newUser } = user;
      const userUpdated = await this.userService.update(newUser, id);
      res.json(userUpdated);
    } catch (error) {
      console.log(error);

      res.status(500).json({ mensage: error });
    }
  }
}
