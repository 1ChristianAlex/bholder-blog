export interface ILoginInputDto {
  email: string;
  password: string;
}
export interface IChangePasswordInputDto {
  email: string;
  password: string;
  newPassword: string;
}
export interface IPayload {
  firstName: string;
  email: string;
  id: number;
  isActive: boolean;
  role: number;
  description: string;
}
