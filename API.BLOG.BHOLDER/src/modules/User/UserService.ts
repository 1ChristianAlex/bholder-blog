import { Injectable } from '@nestjs/common';
import { IUserInputDto } from 'interfaces';
import { User } from 'entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, QueryFailedError } from 'typeorm';
import { Crypt, Bucket } from 'services';

Injectable();
export class UserService {
  constructor(
    @InjectRepository(User) private modelUser: Repository<User>,
    private crypt: Crypt,
    private bucket: Bucket,
  ) {}
  public async create(user: IUserInputDto): Promise<User> {
    try {
      const { file, password, ...data } = user;

      const createObject: IUserInputDto = { ...data, password };

      if (file.fieldname) {
        const urlImage = await this.bucket.uploadMemoryFile(file.buffer);
        createObject.image = urlImage;
      }

      const pass = this.crypt.generateHash(password);
      createObject.password = pass;

      const userResult = await this.modelUser.insert(createObject);

      const [userData] = userResult.raw;

      return { ...user, ...userData } as User;
    } catch (error) {
      const errorQuery: QueryFailedError = error;
      throw new Error(errorQuery.message);
    }
  }

  async update(user: Omit<IUserInputDto, 'id'>, id: number): Promise<User> {
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
