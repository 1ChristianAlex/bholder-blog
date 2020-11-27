import {
  Controller,
  UseGuards,
  Post,
  Body,
  Get,
  Param,
  HttpException,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { JwtAuthGuard } from '../JWTAuth/JwtAuthGuard';
import { Payload } from '../JWTAuth/PayloadDecorator';
import { PostService } from './PostService';
import { TokenPayload, PostInputDto, PostOutputDto } from 'dto';
import { ErrorOnPostCreation } from 'resources';

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
      return this._postService.create(body, payload.id);
    } catch (error) {
      throw new HttpException(ErrorOnPostCreation, HttpStatus.BAD_REQUEST);
    }
  }

  @Get(':id')
  async get(@Param('id') id: number): Promise<PostOutputDto> {
    try {
      return this._postService.getById(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  @Get()
  async getAll(
    @Query('offset') offset = 0,
    @Query('limit') limit = 10,
    @Query('categoryId') categoryId: number = null,
    @Query('statusId') statusId: number = null,
  ): Promise<PostOutputDto[]> {
    try {
      const _offset = Boolean(offset) ? offset : null;
      const _limit = Boolean(limit) ? limit : null;
      const _categoryId = Boolean(categoryId) ? categoryId : null;
      const _statusId = Boolean(statusId) ? statusId : null;

      return this._postService.getAll(_offset, _limit, _categoryId, _statusId);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}

@Controller('post')
export class PostController {
  constructor(private _postService: PostService) {}

  @Get()
  async getAll(
    @Query('offset') offset?: number,
    @Query('limit') limit?: number,
    @Query('categoryId') categoryId?: number,
    @Query('statusId') statusId?: number,
  ): Promise<PostOutputDto[]> {
    try {
      const _offset = Boolean(offset) ? offset : null;
      const _limit = Boolean(limit) ? limit : null;
      const _categoryId = Boolean(categoryId) ? categoryId : null;
      const _statusId = Boolean(statusId) ? statusId : null;

      return this._postService.getAll(_offset, _limit, _categoryId, _statusId);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  @Get(':id')
  async get(@Param('id') id: number): Promise<PostOutputDto> {
    try {
      return this._postService.getById(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
}
