import { Login, User } from '../../models/UserModel';

interface IAuth {
  auth(credentials: Login): Promise<User>;
  logOut(): void;
  refreshUser(): Promise<User>;
}

export type { IAuth };
