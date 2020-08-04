import { Module } from '@nestjs/common';
import { AuthService } from './AuthService';
import { AuthController } from './AuthController';
import { Crypt } from 'services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'entity';
import { JwtModule } from '@nestjs/jwt';
import { configJWT } from 'config/ConfigFile';
import { JwtStrategy } from 'modules/JWTAuth/JwtStrategy';
@Module({
  imports: [TypeOrmModule.forFeature([User]), JwtModule.register(configJWT)],
  controllers: [AuthController],
  providers: [AuthService, Crypt, JwtStrategy],
})
export class AuthModule {}
