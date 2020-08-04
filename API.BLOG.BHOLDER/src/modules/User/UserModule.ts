import { Module } from '@nestjs/common';
import { UserService } from './UserService';
import { UserController } from './UserController';
import { User } from 'entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Crypt, Bucket } from 'services';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../JWTAuth/JwtStrategy';
import { configJWT } from 'config/ConfigFile';

@Module({
  imports: [TypeOrmModule.forFeature([User]), JwtModule.register(configJWT)],
  controllers: [UserController],
  providers: [UserService, Crypt, JwtStrategy, Bucket],
})
export class UserModule {}
