import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { Crypt } from 'services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'entity';
import { JwtModule } from '@nestjs/jwt';
import { configJWT } from 'config/configFile';
import { JwtStrategy } from 'modules/JWTAuth/jwt.strategy';
@Module({
  imports: [TypeOrmModule.forFeature([User]), JwtModule.register(configJWT)],
  controllers: [AuthController],
  providers: [AuthService, Crypt, JwtStrategy],
})
export class AuthModule {}
