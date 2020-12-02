import { PostCategory } from 'entity';

export interface IPostCategoryService {
  create(post: number, category: number): Promise<PostCategory>;
  delete(post?: number, category?: number): Promise<void>;
}
