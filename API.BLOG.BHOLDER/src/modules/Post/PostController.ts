import {
  Controller,
  UseGuards,
  Post,
  Res,
  Body,
  Get,
  Param,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { JwtAuthGuard } from '../JWTAuth/JwtAuthGuard';
import { Payload } from '../JWTAuth/PayloadDecorator';
import { Response } from 'express';
import { PostService } from './PostService';
import { TokenPayload, PostInputDto, PostParms, PostOutputDto } from 'dto';
import { ErrorOnPostCreation, PostNotFound } from 'resources';

@UseGuards(JwtAuthGuard)
@Controller('api/post')
export class PostAPIController {
  constructor(private _postService: PostService) {}

  @Post()
  async create(
    @Body() body: PostInputDto,
    @Payload() payload: TokenPayload,
  ): Promise<PostOutputDto> {
    try {
      const postCreated = await this._postService.create(body, payload.id);
      return postCreated;
    } catch (error) {
      throw new HttpException(ErrorOnPostCreation, HttpStatus.BAD_REQUEST);
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
