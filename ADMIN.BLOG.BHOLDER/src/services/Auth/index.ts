import { Public } from '../Request/Public';
import { IAuth } from './IAuth';
import { ILogin } from 'interfaces';

class Auth implements IAuth {
  constructor(private request: Public) {}

  private readonly LOGIN_ROUTE = '/auth';

  async login(email: string, password: string): Promise<ILogin> {
    try {
      const response = await this.request.post(this.LOGIN_ROUTE, {
        email,
        password,
      });
      const user: ILogin = response.data;

      localStorage.setItem(process.env.REACT_APP_TOKEN_STORAGE!, user.token);

      return user;
    } catch (error) {
      throw Error(error.response.data.message);
    }
  }
  async logout(): Promise<void> {
    localStorage.removeItem(process.env.REACT_APP_TOKEN_STORAGE!);
  }

  static isLoged(): boolean {
    const token = localStorage.getItem(process.env.REACT_APP_TOKEN_STORAGE!);
    if (token) {
      return true;
    }
    return false;
  }
}

const authInstance = new Auth(new Public());

export { Auth, authInstance };
