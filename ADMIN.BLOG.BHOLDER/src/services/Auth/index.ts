import { Public } from '../Request/Public';
import { IAuth } from './IAuth';

class Auth implements IAuth {
  constructor(private request: Public) {}
  private readonly LOGIN_ROUTE = '/auth';

  async login(email: string, password: string): Promise<string> {
    try {
      const token: string = await this.request.post(this.LOGIN_ROUTE, {
        email,
        password,
      });
      localStorage.setItem(process.env.REACT_APP_TOKEN_STORAGE!, token);
      return token;
    } catch (error) {
      throw Error(error.response.data);
    }
  }
  async logout(): Promise<void> {
    localStorage.removeItem(process.env.REACT_APP_TOKEN_STORAGE!);
  }
}

const authInstance = new Auth(new Public());

export { Auth, authInstance };
