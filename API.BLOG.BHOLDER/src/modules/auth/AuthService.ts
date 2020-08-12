import { Injectable } from '@nestjs/common';
import { Crypt } from 'services';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'entity';
import { Repository } from 'typeorm';
import { ILoginInputDto } from 'interfaces';
import { JwtService } from '@nestjs/jwt';
import { IPayload, IChangePasswordInputDto } from 'interfaces/IAuth';
import { IAuthService } from './IAuthService';

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    private crypt: Crypt,
    @InjectRepository(User) private modelUser: Repository<User>,
    private jwt: JwtService,
  ) {}

  public async changePassword(
    accessToChange: IChangePasswordInputDto,
  ): Promise<User> {
    this.validateLogin(accessToChange);

    const { email, password, newPassword } = accessToChange;

    const passCrypy = this.cryptoPassword(password);
    const newCrypy = this.cryptoPassword(newPassword);

    const user = await this.modelUser.findOne({
      where: {
        email,
        password: passCrypy,
      },
    });

    if (!user.id) {
      throw new Error('User not exist');
    }

    const userUpdate = await this.modelUser
      .update({ email, password: passCrypy }, { password: newCrypy })
      .then(() => this.modelUser.findOne({ email, password: newCrypy }));

    return userUpdate;
  }

  private validateLogin(login: ILoginInputDto) {
    if (!login.email) {
      throw new Error('Email is required.');
    }
    if (!login.password) {
      throw new Error('Password is required.');
    }
  }

  private cryptoPassword(password: string): string {
    return this.crypt.generateHash(password);
  }

  async login(login: ILoginInputDto): Promise<string> {
    try {
      this.validateLogin(login);

      const { password, email } = login;

      const passCrypy = this.cryptoPassword(password);

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
