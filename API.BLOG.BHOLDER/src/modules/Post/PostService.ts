import { Injectable } from '@nestjs/common';
import { Post } from 'entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostInputDto } from 'dto';
import { IPostService } from './IPostServices';
import { Bucket } from 'services';

Injectable();
export class PostService implements IPostService {
  constructor(
    @InjectRepository(Post) private modelPost: Repository<Post>,
    private bucket: Bucket,
  ) {}

  async create(post: PostInputDto, userId: number): Promise<Post> {
    try {
      if (post.file.fieldname) {
        const urlImage = await this.bucket.uploadMemoryFile(post.file.path);
        post.thumbnail = urlImage;
        delete post.file;
      }

      const postCreated = await this.modelPost.save({
        datePublish: new Date(),
        ...post,
        user: { id: userId },
        updateAt: new Date(),
      });

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
