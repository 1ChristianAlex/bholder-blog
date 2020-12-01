import { Exclude } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';
import { Post, PostCategory } from 'entity';
import { CategOutputDto } from './Category';
import { UserOutPutDto } from './User';
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
  public id?: number;
  public title?: string;
  public content?: string;
  public shortDescription?: string;
  public thumbnail?: string;

  public keywords?: string[];

  public postPublicationId?: number;
  public postStatusId?: number;
  public postVisibilityId?: number;

  @Exclude()
  private postPublication?: number;

  @Exclude()
  private postStatus?: number;

  @Exclude()
  private postVisibility?: number;

  public datePublish?: Date;
  public createAt?: Date;
  public updateAt?: Date;
  public isActive?: boolean;
  public user?: UserOutPutDto;

  public category?: PostCategoryOutputDto[];

  constructor(partial: Partial<PostOutputDto | Post>) {
    Object.assign(this, partial);
    this.category = this.category.map(
      (item) => new PostCategoryOutputDto(item),
    );

    this.user = new UserOutPutDto(partial.user);
  }
}

class PostCategoryOutputDto {
  public id: number;
  public category: CategOutputDto;

  constructor(partial: Partial<PostCategoryOutputDto | PostCategory>) {
    Object.assign(this, partial);
    this.category = new CategOutputDto(this.category);
  }
}
export class PostQuery {
  offset: number;
  limit: number;
  id: number;
}
