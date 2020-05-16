import { Injectable } from '@nestjs/common';
import { IUser } from 'interfaces';
import { User } from 'entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

Injectable();
export class UserService {
  constructor(@InjectRepository(User) private modelUser: Repository<User>) {}

  public async createUser(user: IUser) {
    const userResult = await this.modelUser.insert(user);
    const [userData] = userResult.raw;
    return { ...user, ...userData } as IUser;
  }
}
