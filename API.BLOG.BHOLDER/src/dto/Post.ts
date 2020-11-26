import { IsNotEmpty } from 'class-validator';
import { Category, User } from 'entity';

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
  public postPublicationId: number;

  @IsNotEmpty()
  public datePublish: Date;

  @IsNotEmpty()
  public postStatusId: number;

  @IsNotEmpty()
  public postVisibilityId: number;

  public isActive: boolean;
}
export class PostOutputDto {
  constructor(
    public id?: number,
    public title?: string,
    public content?: string,
    public shortDescription?: string,
    public thumbnail?: string,
    public keywords?: string[],

    public postPublication?: number,
    public postStatus?: number,
    public postVisibility?: number,
    public datePublish?: Date,
    public createAt?: Date,
    public updateAt?: Date,
    public isActive?: boolean,
    public user?: User,
  ) {}
  public category?: Category[];
}
export class PostParms {
  offset: number;
  limit: number;
  id: number;
}
