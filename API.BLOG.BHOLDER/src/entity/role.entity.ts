import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ schema: 'user' })
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, type: 'varchar' })
  description: string;
}

export default Role;
