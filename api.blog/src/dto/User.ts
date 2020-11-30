import { Exclude } from 'class-transformer';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { Role } from 'entity';

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
  public id: number;

  public firstName: string;

  public lastName: string;

  public email: string;

  @Exclude()
  private password: string;

  public image: string;

  @Exclude()
  private createAt: Date;

  @Exclude()
  private updateAt: Date;

  public isActive: boolean;

  public role: Role;

  constructor(partial: Partial<UserOutPutDto>) {
    Object.assign(this, partial);
  }

  public userDate(): UserOutPutDto {
    return {
      ...this,
      password: this.password,
      createAt: this.createAt,
      updateAt: this.updateAt,
    };
  }
}
