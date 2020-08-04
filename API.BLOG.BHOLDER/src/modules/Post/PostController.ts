import {
  Controller,
  UseGuards,
  Post,
  Res,
  Body,
  Get,
  Param,
} from '@nestjs/common';
import { JwtAuthGuard } from '../JWTAuth/JwtAuthGuard';
import { Payload } from '../JWTAuth/PayloadDecorator';
import { Response } from 'express';
import { PostService } from './PostService';
import { IPayload, IPostInputDto, IPostParms } from 'interfaces';

@UseGuards(JwtAuthGuard)
@Controller('api/post')
export class PostAPIController {
  constructor(private _postService: PostService) {}

  @Post()
  async create(
    @Body() body: IPostInputDto,
    @Res() res: Response,
    @Payload() payload: IPayload,
  ): Promise<void> {
    const postCreated = await this._postService.create(body, payload.id);
    res.status(202).json(postCreated);
  }
}

@Controller('post')
export class PostController {
  constructor(private _postService: PostService) {}

  @Get()
  async getAll(
    @Param() parms: IPostParms,
    @Res() res: Response,
  ): Promise<void> {
    const postList = await this._postService.getAll(
      parms?.offset,
      parms?.limit,
    );
    res.status(200).json(postList);
  }

  @Get('/:id/')
  async get(@Param() parms: IPostParms, @Res() res: Response): Promise<void> {
    const postSingle = await this._postService.getById(parms.id);
    res.status(200).json(postSingle);
  }
}
