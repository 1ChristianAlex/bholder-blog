import { ILogin, IPost, IUser, ICurrentuser } from './';

interface IBody {
  post?: IPost;
  user?: IUser;
  currentUser?: ICurrentuser;
  login?: ILogin;
  data: object;
}

export { IBody };
