import { PostInputDto, PostOutputDto } from 'dto';

export interface IPostService {
  create(post: PostInputDto, userId: number): Promise<PostOutputDto>;
  update(post: PostInputDto, userId: number): Promise<PostOutputDto>;
  getAll(
    offset?: number,
    limit?: number,
    caterogyId?: number,
    statusId?: number,
  ): Promise<PostOutputDto[]>;
  getById(id: number): Promise<PostOutputDto>;
}
