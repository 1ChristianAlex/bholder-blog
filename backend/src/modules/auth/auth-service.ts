import model from '../user/user-model';
import { Cripfy, JsonToken } from '../../helpers/';
import { ILogin, IUser } from '../../Interfaces';

export class AuthService {
  private jsonToken = new JsonToken();
  async Login(login: ILogin): Promise<object> {
    try {
      const cripfy = new Cripfy(login.password);
      const parsedPass = cripfy.CreateHash();
      const userToFind: ILogin = {
        email: login.email,
        password: parsedPass,
      };
      const user = await model
        .findOne({
          where: {
            ...userToFind,
          },
        })
        .then(itemFinded => itemFinded.toJSON() as IUser);
      const token = this.jsonToken.Sing(user);

      return { token, user };
    } catch (error) {
      throw Error(error);
    }
  }
}
