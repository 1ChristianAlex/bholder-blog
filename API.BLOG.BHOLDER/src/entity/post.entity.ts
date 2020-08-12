import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entity';
import Category from './category.entity';

@Entity({ schema: 'posts' })
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, type: 'varchar', primary: true })
  title: string;

  @Column({ nullable: false, type: 'text' })
  content: string;

  @Column({ type: 'varchar', nullable: false })
  thumbnail: string;

  @Column({ nullable: true, type: 'varchar' })
  keywords: string;

  @Column({ type: 'timestamp' })
  datePublish: Date;

  @Column({ type: 'timestamp', default: () => 'LOCALTIMESTAMP' })
  createAt: Date;

  @Column({ type: 'timestamp' })
  updateAt: Date;

  @Column({ default: true })
  isActive: boolean;

  @OneToOne(() => Category)
  @JoinColumn()
  category: Category;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;
}

export default Post;
