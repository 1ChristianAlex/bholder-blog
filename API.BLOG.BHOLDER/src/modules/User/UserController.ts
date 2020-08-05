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
import { diskStorage } from 'multer';
import { resolve } from 'path';

// @UseGuards(JwtAuthGuard)
@Controller('api/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: resolve(__dirname, '../../../uploads'),
        filename: (req, file, cb) =>
          cb(null, `${Date.now()}-${file.originalname}`),
      }),
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

      res.status(302).json({ mensage: error.message });
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
