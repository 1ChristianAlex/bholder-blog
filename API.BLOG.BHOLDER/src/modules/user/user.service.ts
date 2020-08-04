import { Injectable } from '@nestjs/common';
import { IUser, IUserData } from 'interfaces';
import { User } from 'entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, QueryFailedError } from 'typeorm';
import { Crypt, AWSS3 } from 'services';

Injectable();
export class UserService {
  constructor(
    @InjectRepository(User) private modelUser: Repository<User>,
    private crypt: Crypt,
    private s3: AWSS3,
  ) {}
  public async create(user: IUserData): Promise<IUser> {
    try {
      const { image, password, ...data } = user;

      const createObject: IUser = { ...data, password };

      if (image.fieldname) {
        const urlImage = await this.s3.uploadMemoryFile(image.buffer);
        createObject.image = urlImage;
      }

      const pass = this.crypt.generateHash(password);
      createObject.password = pass;
      const userResult = await this.modelUser.insert(createObject);
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
      const userUpdate = await this.modelUser.update({ id }, newData).then(
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
