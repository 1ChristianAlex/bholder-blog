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
  roleId: number;

  @IsNotEmpty()
  password: string;
  image: string;
  createAt: Date;
  updateAt: Date;
  isActive: boolean;
}

export class UserOutPutDto {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public email: string,
    public image: string,
  ) {}
}
