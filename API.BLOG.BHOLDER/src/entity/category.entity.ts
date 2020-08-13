import User from './user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
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

  @CreateDateColumn()
  createAt: Date;

  @CreateDateColumn()
  updateAt: Date;

  @Column({ default: true })
  isActive: boolean;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;
}

export default Category;
