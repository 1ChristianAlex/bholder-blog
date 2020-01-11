interface IUser {
  id?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  password?: string;
  created_at?: string;
  updated_at?: string;
}
interface ICurrentuser extends IUser {}

interface ILogin {
  email: string;
  password: string;
}
export { ILogin, IUser, ICurrentuser };
