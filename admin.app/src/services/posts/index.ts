import { Post, PostFilters } from '../../models/PostModel';
import { IPostService } from './IPostsService';
import Adapter from '../adapter';

class PostService implements IPostService {
  constructor(private adapter: Adapter) {}

  async createPost(postBody: Post): Promise<Post> {
    try {
      const postCreated = await this.adapter.post<Post>('api/post', postBody);
      return postCreated.data;
    } catch (error) {
      throw error.mesage;
    }
  }

  listPosts(filters: PostFilters): Promise<Post[]> {
    throw new Error('Method not implemented.');
  }
}

export default new PostService(new Adapter());
