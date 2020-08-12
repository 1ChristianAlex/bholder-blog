import {
  Controller,
  UseGuards,
  Post,
  Res,
  Body,
  Get,
  Param,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { JwtAuthGuard } from '../JWTAuth/JwtAuthGuard';
import { Payload } from '../JWTAuth/PayloadDecorator';
import { Response } from 'express';
import { PostService } from './PostService';
import { TokenPayload, PostInputDto, PostParms } from 'dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerConfig } from 'config/ConfigFile';
import { ErrorOnPostCreation, PostNotFound } from 'resources';

@UseGuards(JwtAuthGuard)
@Controller('api/post')
export class PostAPIController {
  constructor(private _postService: PostService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image', multerConfig))
  async create(
    @Body() body: PostInputDto,
    @Res() res: Response,
    @Payload() payload: TokenPayload,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<void> {
    try {
      const postCreated = await this._postService.create(
        { ...body, file },
        payload.id,
      );
      res.status(202).json(postCreated);
    } catch (error) {
      res.status(500).json({ message: ErrorOnPostCreation, error });
    }
  }
}

@Controller('post')
export class PostController {
  constructor(private _postService: PostService) {}

  @Get()
  async getAll(@Param() parms: PostParms, @Res() res: Response): Promise<void> {
    try {
      const postList = await this._postService.getAll(
        parms?.offset,
        parms?.limit,
      );
      res.status(200).json(postList);
    } catch (error) {
      res.status(404).json({ message: PostNotFound, error });
    }
  }

  @Get('/:id/')
  async get(@Param() parms: PostParms, @Res() res: Response): Promise<void> {
    try {
      const postSingle = await this._postService.getById(parms.id);
      res.status(200).json(postSingle);
    } catch (error) {
      res.status(404).json({ message: PostNotFound, error });
    }
  }
}
