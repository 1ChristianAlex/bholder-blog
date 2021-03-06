import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ schema: 'posts' })
class PostVisibility {
  constructor(id?: number, descripition?: string) {
    this.id = id;
    this.description = descripition;
  }
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, type: 'varchar' })
  description: string;
}

export default PostVisibility;
