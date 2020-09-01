import {
  LoginInputDto,
  ChangePasswordInputDto,
  LoginOutputDto,
  UserOutPutDto,
} from 'dto';

export interface IAuthService {
  login(login: LoginInputDto): Promise<LoginOutputDto>;
  changePassword(
    accessToChange: ChangePasswordInputDto,
  ): Promise<UserOutPutDto>;
}
