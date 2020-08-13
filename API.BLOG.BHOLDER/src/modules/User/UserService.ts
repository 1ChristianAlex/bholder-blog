import { Injectable } from '@nestjs/common';
import { UserInputDto, UserOutPutDto } from 'dto';
import { User } from 'entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Crypt, Bucket } from 'services';
import { UserCreated } from 'resources';

Injectable();
export class UserService {
  constructor(
    @InjectRepository(User) private modelUser: Repository<User>,
    private crypt: Crypt,
    private bucket: Bucket,
  ) {}
  public async create(user: UserInputDto): Promise<User> {
    try {
      const { file, password, ...data } = user;

      const createObject: UserOutPutDto = { ...data, password };

      if (file.fieldname) {
        const urlImage = await this.bucket.uploadMemoryFile(file.path);
        createObject.image = urlImage;
      }

      const pass = this.crypt.generateHash(password);
      createObject.password = pass;

      const userResult: User = await this.modelUser.save(createObject);

      delete userResult.password;
      return userResult;
    } catch {
      throw new Error(UserCreated);
    }
  }

  async update(user: Omit<UserInputDto, 'id'>, id: number): Promise<User> {
    try {
      const newData = { ...user };

      if (newData.password) {
        newData.password = this.crypt.generateHash(user.password);
      }
      if (newData.file.fieldname) {
        const urlImage = await this.bucket.uploadMemoryFile(newData.file.path);
        newData.image = urlImage;
        delete newData.file;
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
