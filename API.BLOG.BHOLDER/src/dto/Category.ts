import { UserInputDto, UserOutPutDto } from './User';
import { IsNotEmpty } from 'class-validator';
import { Category } from 'entity';
import { Exclude } from 'class-transformer';

export class CategotyUpdateDto {
  category: CategInputDto;
  id: number;
}

export class CategInputDto {
  id?: number;

  @IsNotEmpty()
  name?: string;
  image_category?: string;
  isActive?: boolean;
  user?: UserInputDto;
}
export class CategOutputDto {
  public id: number;
  public name: string;
  public image_category: string;

  @Exclude()
  private createAt: Date;

  @Exclude()
  private updateAt: Date;

  @Exclude()
  private isActive: boolean;

  @Exclude()
  private user?: UserOutPutDto;
  constructor(partial: Partial<Category | CategOutputDto>) {
    Object.assign(this, partial);
  }
}
