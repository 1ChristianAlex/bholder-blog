class Post {
  constructor(partial?: Partial<Post>) {
    Object.assign(this, partial);
  }

  public title?: string;
  public content?: string;
  public shortDescription?: string;
  public thumbnail?: string;
  public keywords?: string[];
  public categoryIds?: number[];
  public datePublish?: Date;
  public postPublicationId?: number;
  public postStatusId?: number;
  public postVisibilityId?: number;

  public id: number | undefined;
  public createAt: Date | undefined;
  public updateAt: Date | undefined;
  public isActive: boolean | undefined;
}

class PostFilters {
  constructor(partial?: Partial<PostFilters>) {
    Object.assign(this, partial);
  }

  public offset?: number;
  public limit?: number;
  public caterogyId?: number;
  public statusId?: number;
}

export { Post, PostFilters };
