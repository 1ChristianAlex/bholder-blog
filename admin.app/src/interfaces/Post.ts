class Post {
  constructor(
    public id?: number,
    public title?: string,
    public content?: string,
    public thumbnail?: string,
    public file?: File,
    public keywords?: string,
    public datePublish?: Date,
    public createAt?: Date,
    public updateAt?: Date,
    public isActive?: boolean
  ) {}
}

export { Post };
