import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import User from '../user.schema/user.entity';
import PostCategory from './postCategory.entity';
import PostPublication from './postPublication.entity';
import PostStatus from './postStatus.entity';
import PostVisibility from './postVisibility.entity';

@Entity({ schema: 'posts' })
export class Post {
  constructor(partial?: Partial<Post>) {
    Object.assign(this, partial);
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, type: 'varchar' })
  title: string;

  @Column({ nullable: false, type: 'text' })
  content: string;

  @Column({ nullable: false, type: 'text' })
  shortDescription: string;

  @Column({ type: 'varchar', nullable: true })
  thumbnail: string;

  @Column({ nullable: true, type: 'varchar' })
  keywords: string;

  @Column({ type: 'timestamp' })
  datePublish: Date;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => PostCategory, (postCateItem) => postCateItem.post, {
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  category: PostCategory[];

  @ManyToOne(() => PostPublication)
  @JoinColumn()
  postPublication: PostPublication;

  @ManyToOne(() => PostStatus)
  @JoinColumn()
  postStatus: PostStatus;

  @ManyToOne(() => PostVisibility)
  @JoinColumn()
  postVisibility: PostVisibility;

  @ManyToOne(() => User)
  @JoinColumn()
  user: User;
}

export default Post;
