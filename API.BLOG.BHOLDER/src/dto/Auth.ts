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
  firstName: string;
  email: string;
  id: number;
  isActive: boolean;
  role: number;
  description: string;
}