import { UserInputDto, UserOutPutDto } from './User';
import { IsNotEmpty } from 'class-validator';

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
  constructor(
    public id: number,
    public name: string,
    public image_category: string,
    public createAt: Date,
    public updateAt: Date,
    public isActive: boolean,
    public user?: UserOutPutDto,
  ) {}
}
