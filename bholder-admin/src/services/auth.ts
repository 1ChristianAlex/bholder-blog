import { ILogin, ILoginResponse } from 'interfaces';
import HttpP from './http-public';

class Auth extends HttpP {
  constructor() {
    super('auth');
  }

  public async Login(body: ILogin): Promise<ILoginResponse | undefined> {
    try {
      const userData = (await this.Post({ login: { ...body } })) as ILoginResponse;

      return userData;
    } catch (error) {
      console.log(error);
    }
  }

  static getInstance() {
    return new Auth();
  }
}

export default Auth;
