import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { IUser } from 'interfaces';

@Controller()
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/user')
  public async CreateUser(@Body() user: IUser) {
    const userCreated = await this.userService.createUser(user);
    return userCreated;
  }
}
