import model from './model';
import { IUser } from 'Interfaces';

class UserService {
  public async create(user: IUser) {
    try {
      const query = await model
        .create(user)
        .then(userCreated => userCreated.toJSON() as IUser);
      return query;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
export default UserService;
