import { Module } from '@nestjs/common';
import { Category, Post, PostCategory } from 'entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../JWTAuth/JwtStrategy';
import { configJWT } from 'config/ConfigFile';
import { PostAPIController, PostController } from './PostController';
import { PostService } from './PostService';
import { Bucket } from 'services';
import { PostCategoryService } from './PostCategory/PostCategortyService';

@Module({
  imports: [
    TypeOrmModule.forFeature([Post, PostCategory, Category]),
    JwtModule.register(configJWT),
  ],
  controllers: [PostAPIController, PostController],
  providers: [PostService, PostCategoryService, JwtStrategy, Bucket],
})
export class PostModule {}
