import { Injectable } from '@nestjs/common';
import { Crypt } from 'services';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'entity';
import { Repository } from 'typeorm';
import { ILogin } from 'interfaces';

@Injectable()
export class AuthService {
  constructor(
    private crypt: Crypt,
    @InjectRepository(User) private modelUser: Repository<User>,
  ) {}

  async login(login: ILogin): Promise<string> {
    const { password, email } = login;

    const passCrypy = this.crypt.generateHash(password);

    const userLogin = await this.modelUser.findOne({
      email,
      password: passCrypy,
    });
    if (userLogin?.id) {
      return 'token';
    } else {
      return 'none';
    }
  }
}
