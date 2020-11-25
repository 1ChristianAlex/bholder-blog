import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { User } from './user.entity';
import Category from './category.entity';

@Entity({ schema: 'posts' })
export class Post {
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
  keywords: string[];

  @Column({ type: 'timestamp' })
  datePublish: Date;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @Column({ default: true })
  isActive: boolean;

  @ManyToOne(() => Category)
  @JoinColumn()
  category: Category;

  @ManyToOne(() => User)
  @JoinColumn()
  user: User;
}

export default Post;
