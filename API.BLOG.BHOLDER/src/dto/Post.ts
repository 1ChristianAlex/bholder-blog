import { IsNotEmpty } from 'class-validator';
import { Category } from 'entity';

export class PostInputDto {
  @IsNotEmpty()
  public title: string;
  @IsNotEmpty()
  public content: string;

  @IsNotEmpty()
  public shortDescription: string;

  @IsNotEmpty()
  public thumbnail: string;

  @IsNotEmpty()
  public keywords: string[];

  @IsNotEmpty()
  public categoryIds: number[];

  @IsNotEmpty()
  public datePublish: Date;

  public isActive: boolean;
}
export class PostOutputDto {
  public id: number;
  public title: string;
  public content: string;
  public shortDescription: string;
  public thumbnail: string;
  public keywords: string[];
  public category: Category;
  public datePublish: Date;
  public createAt: Date;
  public updateAt: Date;
  public isActive: boolean;
}
export class PostParms {
  offset: number;
  limit: number;
  id: number;
}
