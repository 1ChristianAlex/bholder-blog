import { Injectable } from '@nestjs/common';
import { Category, Post, PostCategory } from 'entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IPostCategoryService } from './IPostCategoryService';

Injectable();
export class PostCategoryService implements IPostCategoryService {
  constructor(
    @InjectRepository(PostCategory)
    private postCategoryModel: Repository<PostCategory>,
  ) {}

  async create(postId: number, categoryId: number): Promise<PostCategory> {
    const postCategory = new PostCategory();
    const category = new Category();
    postCategory.category = category;

    postCategory.category.id = categoryId;

    postCategory.post = new Post();
    postCategory.post.id = postId;

    postCategory.id = null;

    const retorno = await this.postCategoryModel
      .save(postCategory)
      .then((postCategoryCreated) =>
        this.postCategoryModel.findOne(postCategoryCreated.id, {
          relations: ['category'],
        }),
      );

    return retorno;
  }
}
