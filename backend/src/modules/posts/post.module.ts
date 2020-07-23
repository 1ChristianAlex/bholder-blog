import { Module } from '@nestjs/common';
import { Post } from 'entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../JWTAuth/jwt.strategy';
import { configJWT } from 'config/configFile';
import { PostAPIController, PostController } from './post.controller';
import { PostService } from './post.service';

@Module({
  imports: [TypeOrmModule.forFeature([Post]), JwtModule.register(configJWT)],
  controllers: [PostAPIController, PostController],
  providers: [PostService, JwtStrategy],
})
export class PostModule {}
