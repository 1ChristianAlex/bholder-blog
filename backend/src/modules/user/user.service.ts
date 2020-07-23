import { Injectable } from '@nestjs/common';
import { IUser } from 'interfaces';
import { User } from 'entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, QueryFailedError } from 'typeorm';
import { Crypt } from 'services';

Injectable();
export class UserService {
  constructor(
    @InjectRepository(User) private modelUser: Repository<User>,
    private crypt: Crypt,
  ) {}
  public async create(user: IUser): Promise<IUser> {
    try {
      const pass = this.crypt.generateHash(user.password);
      const userResult = await this.modelUser.insert({
        ...user,
        password: pass,
      });
      const [userData] = userResult.raw;
      return { ...user, ...userData } as IUser;
    } catch (error) {
      const errorQuery: QueryFailedError = error;
      throw new Error(errorQuery.message);
    }
  }

  async update(user: Omit<IUser, 'id'>, id: number): Promise<IUser> {
    try {
      const newData = { ...user };
      if (newData.password) {
        newData.password = this.crypt.generateHash(user.password);
      }
      const userUpdate = await this.modelUser
        .update({ id }, newData)
        .then(
          async () =>
            await this.modelUser.findOne({
              where: { id },
              relations: ['role'],
            }),
        );

      return userUpdate;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
