import { Post, PostFilters } from '../../models/PostModel';
import { IPostService } from './IPostsService';
import Adapter from '../adapter';
import store from '../../redux/store';
import actions from '../../redux/actions';
class PostService implements IPostService {
  constructor(private adapter: Adapter) {}

  async getPostById(postId: number): Promise<Post> {
    try {
      const postItem = await this.adapter.get<Post>(`api/post/${postId}`);

      return postItem.data;
    } catch (error) {
      throw error.mesage;
    }
  }

  async createPost(postBody: Post): Promise<Post> {
    try {
      store.dispatch(
        actions.updateSnackbar({
          open: true,
          message: 'Carregando...',
          loading: true,
        })
      );

      const postCreated = await this.adapter.post<Post>('api/post', postBody);

      store.dispatch(
        actions.updateSnackbar({
          open: true,
          message: `Post criado com sucesso`,
          loading: false,
        })
      );

      return postCreated.data;
    } catch (error) {
      throw error.mesage;
    }
  }

  async updatePost(postBody: Post): Promise<Post> {
    try {
      store.dispatch(
        actions.updateSnackbar({
          open: true,
          message: 'Carregando...',
          loading: true,
        })
      );

      const postCreated = await this.adapter.put<Post>('api/post', postBody);

      store.dispatch(
        actions.updateSnackbar({
          open: true,
          message: `Post atualizado com sucesso`,
          loading: false,
        })
      );

      return postCreated.data;
    } catch (error) {
      throw error.mesage;
    }
  }

  async listPosts(filters?: PostFilters): Promise<Post[]> {
    try {
      const postList = await this.adapter.get<Post[]>('api/post', {
        params: filters,
      });

      return postList.data;
    } catch (error) {
      throw error.mesage;
    }
  }
}

export default new PostService(new Adapter());
