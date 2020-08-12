import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginInputDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
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
