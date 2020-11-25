import { Post, PostFilters } from '../../models/PostModel';

interface IPostService {
  createPost(postBody: Post): Promise<Post>;
  listPosts(filters: PostFilters): Promise<Post[]>;
}

export type { IPostService };
