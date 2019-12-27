import model from "./model";
import { IUser } from "Interfaces";

class UserService {
  public async create(user: IUser): Promise<IUser> {
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
  public async getUser(id: number): Promise<IUser> {
    try {
      const user: IUser = await model
        .findByPk(id)
        .then(userFind => userFind.toJSON() as IUser);
      return user;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
export default UserService;
