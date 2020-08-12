import { ILoginInputDto, IChangePasswordInputDto } from 'interfaces';
import { User } from 'entity';

export interface IAuthService {
  login(login: ILoginInputDto): Promise<string>;
  changePassword(accessToChange: IChangePasswordInputDto): Promise<User>;
}
