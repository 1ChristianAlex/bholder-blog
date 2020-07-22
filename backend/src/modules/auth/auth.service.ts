import { Injectable } from '@nestjs/common';
import { Crypt } from 'services';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'entity';
import { Repository } from 'typeorm';
import { ILogin } from 'interfaces';
import { AuthJWT } from './auth.jwt';

@Injectable()
export class AuthService {
  constructor(
    private crypt: Crypt,
    @InjectRepository(User) private modelUser: Repository<User>,
    private jwt: AuthJWT,
  ) {}

  async login(login: ILogin): Promise<string> {
    const { password, email } = login;

    const passCrypy = this.crypt.generateHash(password);

    const userLogin = await this.modelUser.findOne({
      email,
      password: passCrypy,
    });
    if (userLogin?.id) {
      const payload = {
        name: userLogin.firstName,
        email: userLogin.email,
        id: userLogin.id,
      };
      return this.jwt.generateToken(payload);
    } else {
      return 'none';
    }
  }
}
