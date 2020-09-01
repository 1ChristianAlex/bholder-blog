import { IUser, ILogin } from 'interfaces';

export interface IAuth {
  login(email: string, password: string): Promise<ILogin>;
  logout(): Promise<void>;
}
