import { Module } from '@nestjs/common';
import { Post } from 'entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../JWTAuth/JwtStrategy';
import { configJWT } from 'config/ConfigFile';
import { PostAPIController, PostController } from './PostController';
import { PostService } from './PostService';

@Module({
  imports: [TypeOrmModule.forFeature([Post]), JwtModule.register(configJWT)],
  controllers: [PostAPIController, PostController],
  providers: [PostService, JwtStrategy],
})
export class PostModule {}
