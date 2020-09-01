import { Injectable } from '@nestjs/common';
import { Crypt } from 'services';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'entity';
import { Repository } from 'typeorm';
import {
  LoginInputDto,
  ChangePasswordInputDto,
  TokenPayload,
  LoginOutputDto,
  UserOutPutDto,
} from 'dto';
import { JwtService, JwtSignOptions } from '@nestjs/jwt';
import { IAuthService } from './IAuthService';

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    private crypt: Crypt,
    @InjectRepository(User) private modelUser: Repository<User>,
    private jwt: JwtService,
  ) {}

  private generateToken(
    tokenData: TokenPayload,
    jwtOptions?: JwtSignOptions,
  ): string {
    return this.jwt.sign(tokenData, { expiresIn: '24h', ...jwtOptions });
  }

  public async changePassword(
    accessToChange: ChangePasswordInputDto,
  ): Promise<UserOutPutDto> {
    this.validateLogin(accessToChange);

    const { email, password, newPassword } = accessToChange;

    const passCrypy = this.crypt.generateHash(password);
    const newCrypy = this.crypt.generateHash(newPassword);

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

  private validateLogin(login: LoginInputDto) {
    if (!login.email) {
      throw new Error('Email is required.');
    }
    if (!login.password) {
      throw new Error('Password is required.');
    }
  }

  async login(login: LoginInputDto): Promise<LoginOutputDto> {
    try {
      this.validateLogin(login);

      const { password, email } = login;

      const userLogin = await this.modelUser.findOne({
        where: {
          email,
        },
        relations: ['role'],
      });

      if (!userLogin || !this.crypt.compareHash(password, userLogin.password)) {
        throw new Error('Wrong login or password');
      }

      if (userLogin?.id) {
        const payload: TokenPayload = {
          firstName: userLogin.firstName,
          email: userLogin.email,
          id: userLogin.id,
          isActive: userLogin.isActive,
          role: userLogin.role.id,
          description: userLogin.role.description,
        };

        delete userLogin.password;

        const token = this.generateToken(payload);

        const output: LoginOutputDto = {
          token,
          user: userLogin,
        };

        return output;
      } else {
        throw new Error('User has no access');
      }
    } catch (error) {
      throw error;
    }
  }
}
