export interface IPostInputDto {
  id?: number;
  title?: string;
  content?: string;
  thumbnail?: string;
  file?: Express.Multer.File;
  keywords?: string;
  datePublish?: Date;
  createAt?: Date;
  updateAt?: Date;
  isActive?: boolean;
}

export interface IPostOutputDto {
  id: number;
  title: string;
  content: string;
  thumbnail: string;
  keywords: string;
  datePublish: Date;
  createAt: Date;
  updateAt: Date;
  isActive: boolean;
}

export interface IPostParms {
  offset?: number;
  limit?: number;
  id?: number;
}
