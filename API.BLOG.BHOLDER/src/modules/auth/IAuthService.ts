import { ILoginInputDto } from 'interfaces';

export interface IAuthService {
  login(login: ILoginInputDto): Promise<string>;
}
