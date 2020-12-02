import { Injectable } from '@nestjs/common';
import { Category, Post, PostCategory } from 'entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectLiteral, Repository } from 'typeorm';
import { IPostCategoryService } from './IPostCategoryService';

Injectable();
export class PostCategoryService implements IPostCategoryService {
  constructor(
    @InjectRepository(PostCategory)
    private postCategoryModel: Repository<PostCategory>,
  ) {}
  async delete(postId?: number, categoryId?: number): Promise<void> {
    const deleteCondition: ObjectLiteral = {};

    if (categoryId) {
      deleteCondition.category = { id: categoryId };
    }
    if (postId) {
      deleteCondition.post = { id: postId };
    }

    await this.postCategoryModel.delete(deleteCondition).then(console.log);
  }

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
