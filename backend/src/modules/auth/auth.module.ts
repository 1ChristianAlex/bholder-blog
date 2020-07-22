import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { Crypt } from 'services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'entity';
import { JwtModule } from '@nestjs/jwt';
import { SECRET } from 'config/envs';
import { AuthJWT } from './auth.jwt';
@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: SECRET,
      signOptions: { expiresIn: '24h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, Crypt, AuthJWT],
})
export class AuthModule {}
