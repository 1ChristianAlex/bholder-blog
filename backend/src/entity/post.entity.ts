import {
  Entity,
  Column,
  JoinColumn,
  PrimaryGeneratedColumn,
  OneToOne,
} from 'typeorm';
import { User } from './user.entity';

@Entity({ schema: 'posts' })
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, type: 'varchar', primary: true })
  title: string;

  @Column({ nullable: false, type: 'text' })
  content: string;

  @Column({ type: 'varchar' })
  thumbnail: string;

  @Column({ nullable: true, type: 'varchar' })
  categorie: string;

  @Column({ nullable: true, type: 'varchar' })
  image: string;

  @Column({ nullable: true, type: 'varchar' })
  keywords: string;

  @Column({ type: 'timestamp', default: () => 'LOCALTIMESTAMP' })
  createAt: Date;

  @Column({ type: 'timestamp' })
  updateAt: Date;

  @Column({ default: true })
  isActive: boolean;

  @OneToOne(type => User)
  @JoinColumn()
  user: User;
}

export default User;
