import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserInputDto {
  id: number;

  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
  image: string;
  file: Express.Multer.File;
  createAt: Date;
  updateAt: Date;
  isActive: boolean;
}

export class UserOutPutDto {
  id: number;

  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
  image: string;
}
