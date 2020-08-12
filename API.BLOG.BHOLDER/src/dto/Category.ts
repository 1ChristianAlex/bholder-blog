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
  tags?: string;
  image_category?: string;
  file?: Express.Multer.File;
  isActive?: boolean;
  user?: UserInputDto;
}
export class CategOutputDto {
  id: number;
  name: string;
  tags: string;
  image_category: string;
  createAt: Date;
  updateAt: Date;
  isActive: boolean;
  user?: UserOutPutDto;
}
