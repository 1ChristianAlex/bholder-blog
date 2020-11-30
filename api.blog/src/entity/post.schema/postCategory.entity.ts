import { Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm';
import Category from './category.entity';
import Post from './post.entity';

@Entity({ schema: 'posts' })
export class PostCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Category, { cascade: true, eager: true })
  @JoinColumn()
  category: Category;

  @ManyToOne(() => Post)
  @JoinColumn()
  post: Post;
}

export default PostCategory;
