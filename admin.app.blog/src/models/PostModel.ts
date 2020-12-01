import {
  PostStatus,
  PostPublication,
  PostVisibility,
} from '../enums/PostEnums';
import { User } from './UserModel';

class Post {
  constructor(partial?: Partial<Post>) {
    Object.assign(this, partial);
  }

  public title: string;
  public content: string;
  public shortDescription: string;
  public thumbnail: string;
  public keywords: string[];
  public categoryIds: number[];
  public datePublish: Date;
  public postPublicationId: PostPublication | number;
  public postStatusId: PostStatus | number;
  public postVisibilityId: PostVisibility | number;

  public id: number;
  public createAt: Date;
  public updateAt: Date;
  public isActive: boolean;
  public user: User;
}

class PostFilters {
  constructor(partial: Partial<PostFilters>) {
    Object.assign(this, partial);
  }

  public offset?: number;
  public limit?: number;
  public caterogyId?: number;
  public statusId?: number;
}

export { Post, PostFilters };
