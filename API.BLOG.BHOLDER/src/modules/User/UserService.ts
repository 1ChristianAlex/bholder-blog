import { Injectable } from '@nestjs/common';
import { IUserInputDto } from 'interfaces';
import { User } from 'entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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
        const urlImage = await this.bucket.uploadMemoryFile(file.path);
        createObject.image = urlImage;
      }

      const pass = this.crypt.generateHash(password);
      createObject.password = pass;

      const userResult = await this.modelUser
        .insert(createObject)
        .then((result) =>
          this.modelUser.findOne({
            where: { id: result.raw[0].id },
            relations: ['role'],
          }),
        );

      return userResult;
    } catch {
      throw new Error('Error on create new user');
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
