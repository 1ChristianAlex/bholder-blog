export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image?: string;
}
export interface ILogin {
  token: string;
  user: IUser;
}
