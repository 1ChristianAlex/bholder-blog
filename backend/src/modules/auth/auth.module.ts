import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { Crypt } from 'services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [AuthService, Crypt],
})
export class AuthModule {}
