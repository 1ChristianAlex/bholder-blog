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
import { IUserInputDto } from 'interfaces';
import { Response } from 'express';
import { JwtAuthGuard } from '../JWTAuth/JwtAuthGuard';
import { memoryStorage } from 'multer';

// @UseGuards(JwtAuthGuard)
@Controller('api/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('image', {
      storage: memoryStorage(),
    }),
  )
  public async CreateUser(
    @Body() user: IUserInputDto,
    @Res() res: Response,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<void> {
    try {
      const userCreated = await this.userService.create({
        ...user,
        file,
      });
      res.json(userCreated);
    } catch (error) {
      console.log(error);

      res.status(500).json({ mensage: error });
    }
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  async updateUser(
    @Body() user: IUserInputDto,
    @Res() res: Response,
  ): Promise<void> {
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
