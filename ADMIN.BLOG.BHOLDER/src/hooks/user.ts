import { IUser } from '../interfaces';
import { USER_NOT_LOGED } from '../config/constants';

const useUser = (): IUser => {
  const userStorage = localStorage.getItem('user');
  if (userStorage) {
    const user: IUser = JSON.parse(userStorage);
    return user;
  }
  throw new Error(USER_NOT_LOGED);
};

export { useUser };
