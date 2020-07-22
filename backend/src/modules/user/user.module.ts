import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from 'entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Crypt } from 'services';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService, Crypt],
})
export class UserModule {}
