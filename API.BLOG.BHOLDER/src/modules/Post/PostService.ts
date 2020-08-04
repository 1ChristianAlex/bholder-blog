import { Injectable } from '@nestjs/common';
import { Post } from 'entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IPostInputDto } from 'interfaces';
import { IPostService } from './IPostServices';

Injectable();
export class PostService implements IPostService {
  constructor(@InjectRepository(Post) private modelPost: Repository<Post>) {}

  async create(post: IPostInputDto, userId: number): Promise<Post> {
    try {
      const postCreated = await this.modelPost
        .insert({
          datePublish: new Date(),
          ...post,
          user: { id: userId },
          updateAt: new Date(),
        })
        .then((res) => res.raw);
      return postCreated;
    } catch (error) {
      console.log(error);
    }
  }
  async getAll(offset = 0, limit = 10): Promise<Post[]> {
    try {
      const postList = await this.modelPost.find({
        where: {
          isActive: true,
        },
        order: {
          datePublish: 'ASC',
        },
        skip: offset,
        take: limit,
      });

      return postList;
    } catch (error) {
      console.log(error);
    }
  }

  async getById(id: number): Promise<Post> {
    try {
      const postUnico = await this.modelPost.findOne({
        where: { id },
        relations: ['category', 'user'],
      });

      return postUnico;
    } catch (error) {
      console.log(error);
    }
  }
}
