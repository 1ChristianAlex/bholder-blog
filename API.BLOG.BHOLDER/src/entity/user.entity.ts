import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import Role from './role.entity';

@Entity({ schema: 'user' })
export class User {
  constructor() {
    this.updateAt = new Date();
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, type: 'varchar' })
  firstName: string;

  @Column({ nullable: false, type: 'varchar' })
  lastName: string;

  @Column({ nullable: false, type: 'varchar', unique: true })
  email: string;

  @Column({ nullable: false, type: 'varchar' })
  password: string;

  @Column({ nullable: true, type: 'varchar' })
  image: string;

  @Column({ type: 'timestamp', default: () => 'LOCALTIMESTAMP' })
  createAt: Date;

  @Column({ type: 'timestamp', nullable: true })
  updateAt: Date;

  @Column({ default: true })
  isActive: boolean;

  @OneToOne(() => Role)
  @JoinColumn()
  role: Role;
}

export default User;
