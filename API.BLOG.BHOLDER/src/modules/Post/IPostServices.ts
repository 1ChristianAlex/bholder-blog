import { PostInputDto } from 'dto';
import { Post } from 'entity';

export interface IPostService {
  create(post: PostInputDto, userId: number): Promise<Post>;
  getAll(
    offset?: number,
    limit?: number,
    caterogyId?: number,
    statusId?: number,
  ): Promise<Post[]>;
  getById(id: number): Promise<Post>;
}
