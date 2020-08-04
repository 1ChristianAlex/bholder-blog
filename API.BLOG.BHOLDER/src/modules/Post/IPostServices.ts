import { IPostInputDto } from 'interfaces';
import { Post } from 'entity';

export interface IPostService {
  create(post: IPostInputDto, userId: number): Promise<Post>;
  getAll(offset?: number, limit?: number): Promise<Post[]>;
  getById(id: number): Promise<Post>;
}
