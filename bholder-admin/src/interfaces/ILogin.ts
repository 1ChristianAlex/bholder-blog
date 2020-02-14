import { IUser } from ".";

export interface Login {
  email?: string;
  password?: string;
}
export interface Token {
  token: string;
}
export interface LoginResponse {
  user: IUser;
  token: Token;
}
