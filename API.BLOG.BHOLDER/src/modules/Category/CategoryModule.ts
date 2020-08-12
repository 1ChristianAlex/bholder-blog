import { Module } from '@nestjs/common';
import { Category } from 'entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../JWTAuth/JwtStrategy';
import { configJWT } from 'config/ConfigFile';
import { Bucket } from 'services';
import { CategoryController } from './CatergoryController';
import { CategoryService } from './CatergoryService';

@Module({
  imports: [
    TypeOrmModule.forFeature([Category]),
    JwtModule.register(configJWT),
  ],
  controllers: [CategoryController],
  providers: [CategoryService, JwtStrategy, Bucket],
})
export class PostCategoryModule {}
