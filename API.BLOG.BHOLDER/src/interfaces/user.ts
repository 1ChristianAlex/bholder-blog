export interface IUserData {
  id?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  image: Express.Multer.File;
  createAt?: Date;
  updateAt?: Date;
  isActive?: boolean;
}
export interface IUser {
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
