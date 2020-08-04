import { IUser } from 'interfaces';
import HttpPrivate from './http-private';

const getCurrentUser = async () => {
  try {
    const http = HttpPrivate.getInstance();

    const currentUser = await http.Get('currentUser');
    return currentUser.user as IUser;
  } catch (error) {
    console.log(error);
  }
};

export default getCurrentUser;
