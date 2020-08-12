export class PostInputDto {
  id: number;
  title: string;
  content: string;
  thumbnail: string;
  file: Express.Multer.File;
  keywords: string;
  datePublish: Date;
  createAt: Date;
  updateAt: Date;
  isActive: boolean;
}

export class PostOutputDto {
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

export class PostParms {
  offset: number;
  limit: number;
  id: number;
}
