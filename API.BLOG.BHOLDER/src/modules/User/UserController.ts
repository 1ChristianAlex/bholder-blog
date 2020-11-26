import {
  Controller,
  Post,
  Body,
  Put,
  UseGuards,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { UserService } from './UserService';
import { UserInputDto, TokenPayload, UserOutPutDto } from 'dto';
import { JwtAuthGuard } from '../JWTAuth/JwtAuthGuard';
import { Payload } from '../JWTAuth/PayloadDecorator';

@UseGuards(JwtAuthGuard)
@Controller('api/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  public async CreateUser(
    @Body() user: UserInputDto,
    @Payload() payload: TokenPayload,
  ): Promise<UserOutPutDto> {
    try {
      if (payload.role !== 1) {
        throw Error('Only administrator can create new users');
      }
      return this.userService.create(user);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.UNAUTHORIZED);
    }
  }

  @Put()
  async updateUser(@Body() user: UserInputDto): Promise<UserOutPutDto> {
    try {
      const { id, ...newUser } = user;
      return this.userService.update(newUser, id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.UNAUTHORIZED);
    }
  }
}
