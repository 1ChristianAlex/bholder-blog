import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import User from './user.entity';

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
