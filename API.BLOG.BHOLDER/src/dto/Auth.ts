import { IsEmail, IsNotEmpty } from 'class-validator';
import { UserOutPutDto } from './User';

export class LoginInputDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
}
export class LoginOutputDto {
  constructor(partial: Partial<LoginOutputDto>) {
    Object.assign(this, partial);
  }

  @IsNotEmpty()
  user: UserOutPutDto;

  @IsNotEmpty()
  token: string;
}
export class ChangePasswordInputDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  newPassword: string;
}

export class TokenPayload {
  constructor(
    public firstName: string,
    public email: string,
    public id: number,
    public isActive: boolean,
    public role: number,
    public description: string,
  ) {}
}
