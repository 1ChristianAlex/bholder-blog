import { Injectable } from '@nestjs/common';
import { UserInputDto, UserOutPutDto } from 'dto';
import { User } from 'entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Crypt, Bucket } from 'services';
import { UserCreated } from 'resources';
import { IUserService } from './IUserService';

Injectable();
export class UserService implements IUserService {
  constructor(
    @InjectRepository(User) private modelUser: Repository<User>,
    private crypt: Crypt,
    private bucket: Bucket,
  ) {}
  public async create(user: UserInputDto): Promise<UserOutPutDto> {
    try {
      let userObject: User;

      const urlImage = await this.bucket.uploadBaseFile(user.image);

      userObject.image = urlImage;

      const pass = this.crypt.generateHash(user.password);

      userObject.password = pass;

      const userCreated = await this.modelUser.save({
        ...user,
        ...userObject,
      });

      const userOutPut = this.mapUserOutput(userCreated);

      return userOutPut;
    } catch {
      throw new Error(UserCreated);
    }
  }

  private mapUserOutput(user: User) {
    return new UserOutPutDto(user);
  }

  async update(
    user: Omit<UserInputDto, 'id'>,
    id: number,
  ): Promise<UserOutPutDto> {
    try {
      const newData = { ...user };

      if (newData.password) {
        newData.password = this.crypt.generateHash(user.password);
      }
      if (newData.image) {
        const urlImage = await this.bucket.uploadBaseFile(newData.image);
        newData.image = urlImage;
      }

      const userUpdate = await this.modelUser.update({ id }, newData).then(
        async () =>
          await this.modelUser.findOne({
            where: { id },
            relations: ['role'],
          }),
      );
      return this.mapUserOutput(userUpdate);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
