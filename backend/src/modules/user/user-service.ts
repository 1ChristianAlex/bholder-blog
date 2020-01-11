import model from './user-model';
import { IUser } from '../../Interfaces';
import { Cripfy, JsonToken } from '../../helpers/';

export default class UserService {
  private jsonToken = new JsonToken();
  public async Create(user: IUser): Promise<IUser> {
    try {
      const { password } = user;
      const cript = new Cripfy(password);

      const newUser: IUser = {
        ...user,
        password: cript.CreateHash()
      };

      const query = await model
        .create(newUser)
        .then(userCreated => userCreated.toJSON() as IUser);

      return query;
    } catch (error) {
      throw Error(error);
    }
  }
  public async GetUserById(id: string): Promise<IUser> {
    try {
      return await model
        .findByPk(id)
        .then(userFind => userFind.toJSON() as IUser);
    } catch (error) {
      throw Error(error);
    }
  }
  public async DeleteUser(id: string): Promise<string> {
    try {
      return model
        .destroy({
          where: {
            id
          }
        })
        .then(deleted => {
          if (deleted > 0) {
            return 'User was deleted';
          }
          throw 'User not found';
        });
    } catch (error) {
      throw Error(error);
    }
  }
  async Update(id: string, updateValue: IUser): Promise<IUser> {
    try {
      const update = await model
        .update(updateValue, {
          where: { id }
        })
        .then(() =>
          model.findByPk(id).then(userUpdated => userUpdated.toJSON() as IUser)
        );
      return update;
    } catch (error) {
      throw Error(error);
    }
  }
  async CurrentUser(token: string) {
    try {
      return this.jsonToken.Verify(token);
    } catch (error) {
      throw Error(error);
    }
  }
}
