import User from './user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity({ schema: 'posts' })
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, type: 'varchar', primary: true })
  name: string;

  @Column({ nullable: false, type: 'text' })
  tags: string;

  @Column({ nullable: true, type: 'varchar' })
  image_category: string;

  @Column({ type: 'timestamp', default: () => 'LOCALTIMESTAMP' })
  createAt: Date;

  @Column({ type: 'timestamp' })
  updateAt: Date;

  @Column({ default: true })
  isActive: boolean;

  @OneToOne((type) => User)
  @JoinColumn()
  user: User;
}

export default Category;
