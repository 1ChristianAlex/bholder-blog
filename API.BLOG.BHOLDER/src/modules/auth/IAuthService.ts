import { LoginInputDto, ChangePasswordInputDto } from 'dto';
import { User } from 'entity';

export interface IAuthService {
  login(login: LoginInputDto): Promise<string>;
  changePassword(accessToChange: ChangePasswordInputDto): Promise<User>;
}
