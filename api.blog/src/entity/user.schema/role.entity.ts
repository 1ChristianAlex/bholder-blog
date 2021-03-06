import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ schema: 'user' })
class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, type: 'varchar' })
  description: string;
}

export default Role;
