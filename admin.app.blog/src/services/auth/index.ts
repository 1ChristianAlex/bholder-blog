import { Login, LoginData, User } from '../../models/UserModel';
import { IAuth } from './IAuth';
import Adapter from '../adapter';
import store from '../../redux/store';
import actions from '../../redux/actions';

class Auth implements IAuth {
  constructor(private adapter: Adapter) {}

  async refreshUser(): Promise<User> {
    try {
      const userAuth = await this.adapter.get<LoginData>('/auth/refresh');
      localStorage.setItem('token', userAuth.data.token);
      store.dispatch(actions.updateUser(userAuth.data.user));
      return userAuth.data.user;
    } catch (error) {
      throw new Error('Usuário não tem acesso');
    }
  }

  async auth(credentials: Login): Promise<User> {
    store.dispatch(
      actions.updateSnackbar({
        open: true,
        message: 'Carregando...',
        loading: true,
      })
    );
    const userAuth = await this.adapter.post<LoginData>('/auth', credentials);

    localStorage.setItem('token', userAuth.data.token);
    await store.dispatch(actions.updateUser(userAuth.data.user));

    store.dispatch(
      actions.updateSnackbar({
        open: true,
        message: `Bem vindo ${userAuth.data.user.firstName}`,
        loading: false,
      })
    );

    return userAuth.data.user;
  }

  logOut(): void {
    localStorage.removeItem('clear');
  }
}

export { Auth };

export default new Auth(new Adapter());
