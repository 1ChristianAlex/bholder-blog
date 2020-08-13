import {
  Controller,
  Post,
  Body,
  Res,
  Put,
  UseGuards,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UserService } from './UserService';
import { UserInputDto, TokenPayload } from 'dto';
import { Response } from 'express';
import { JwtAuthGuard } from '../JWTAuth/JwtAuthGuard';
import { multerConfig } from 'config/ConfigFile';
import { Payload } from '../JWTAuth/PayloadDecorator';

@UseGuards(JwtAuthGuard)
@Controller('api/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image', multerConfig))
  public async CreateUser(
    @Body() user: UserInputDto,
    @Res() res: Response,
    @UploadedFile() file: Express.Multer.File,
    @Payload() payload: TokenPayload,
  ): Promise<void> {
    try {
      if (payload.role !== 1) {
        throw Error('Only administrator can create new users');
      }
      const userCreated = await this.userService.create({
        ...user,
        file,
      });

      res.json(userCreated);
    } catch (error) {
      res.status(302).json({ mensage: error.message });
    }
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  @UseInterceptors(FileInterceptor('image', multerConfig))
  async updateUser(
    @Body() user: UserInputDto,
    @Res() res: Response,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<void> {
    try {
      const { id, ...newUser } = user;
      newUser.file = file;
      const userUpdated = await this.userService.update(newUser, id);
      res.json(userUpdated);
    } catch (error) {
      res.status(500).json({ mensage: error });
    }
  }
}
