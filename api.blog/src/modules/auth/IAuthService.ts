import {
  LoginInputDto,
  ChangePasswordInputDto,
  LoginOutputDto,
  UserOutPutDto,
  TokenPayload,
} from 'dto';

export interface IAuthService {
  login(login: LoginInputDto): Promise<LoginOutputDto>;
  refreshUser(token: TokenPayload): Promise<LoginOutputDto>;
  changePassword(
    accessToChange: ChangePasswordInputDto,
  ): Promise<UserOutPutDto>;
}
