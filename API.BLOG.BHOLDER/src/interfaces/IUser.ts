export interface IUserInputDto {
  id?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  image?: string;
  file?: Express.Multer.File;
  createAt?: Date;
  updateAt?: Date;
  isActive?: boolean;
}

export interface IUserOutPutDto {
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
