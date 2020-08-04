import { Injectable } from '@nestjs/common';
import { Crypt } from 'services';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'entity';
import { Repository } from 'typeorm';
import { ILoginInputDto } from 'interfaces';
import { JwtService } from '@nestjs/jwt';
import { IPayload } from 'interfaces/IAuth';
import { IAuthService } from './IAuthService';

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    private crypt: Crypt,
    @InjectRepository(User) private modelUser: Repository<User>,
    private jwt: JwtService,
  ) {}

  async login(login: ILoginInputDto): Promise<string> {
    try {
      const { password, email } = login;

      const passCrypy = this.crypt.generateHash(password);

      const userLogin = await this.modelUser.findOne({
        where: {
          email,
          password: passCrypy,
        },
        relations: ['role'],
      });

      if (userLogin?.id) {
        const payload: IPayload = {
          firstName: userLogin.firstName,
          email: userLogin.email,
          id: userLogin.id,
          isActive: userLogin.isActive,
          role: userLogin.role.id,
          description: userLogin.role.description,
        };
        return this.jwt.sign(payload);
      } else {
        throw new Error('User has no access');
      }
    } catch (error) {
      throw error;
    }
  }
}
