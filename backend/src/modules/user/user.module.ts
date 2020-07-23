import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from 'entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Crypt } from 'services';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../JWTAuth/jwt.strategy';
import { configJWT } from 'config/configFile';

@Module({
  imports: [TypeOrmModule.forFeature([User]), JwtModule.register(configJWT)],
  controllers: [UserController],
  providers: [UserService, Crypt, JwtStrategy],
})
export class UserModule {}
