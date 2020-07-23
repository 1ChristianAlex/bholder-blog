import { Controller, Post, Body, Res, Put, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { IUser } from 'interfaces';
import { Response } from 'express';
import { JwtAuthGuard } from '../JWTAuth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('api/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
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

  @Put()
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
