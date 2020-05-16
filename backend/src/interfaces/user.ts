export interface IUserData {
  id?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  image?: string;
  createAt?: Date;
  updateAt?: Date;
  isActive?: boolean;
}
export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  image: string;
  createAt: Date;
  updateAt: Date;
  isActive: boolean;
}
