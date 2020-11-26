import { Injectable } from '@nestjs/common';
import { Category, Post, PostCategory } from 'entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostInputDto, PostOutputDto } from 'dto';
import { IPostService } from './IPostServices';
import { Bucket } from 'services';

Injectable();
export class PostService implements IPostService {
  constructor(
    @InjectRepository(Post) private modelPost: Repository<Post>,
    @InjectRepository(PostCategory)
    private postCategoryModel: Repository<PostCategory>,
    private bucket: Bucket,
  ) {}

  async create(post: PostInputDto, userId: number): Promise<PostOutputDto> {
    try {
      if (post.thumbnail) {
        const urlImage = await this.bucket.uploadBaseFile(post.thumbnail);
        post.thumbnail = urlImage;
      }

      const postCreated = await this.modelPost
        .save({
          ...post,
          datePublish: new Date(),
          keywords: post.keywords.filter(Boolean),
          postPublication: { id: post.postPublicationId },
          postStatus: { id: post.postStatusId },
          postVisibility: { id: post.postPublicationId },
          user: { id: userId },
          updateAt: new Date(),
        })
        .then(async (postItem) => {
          await Promise.all(
            post.categoryIds.map(async (item) => {
              const postCategory = new PostCategory();
              const category = new Category();
              postCategory.category = category;

              postCategory.category.id = 2;

              postCategory.post = new Post();
              postCategory.post.id = postItem.id;

              postCategory.id = null;

              return await this.postCategoryModel
                .save(postCategory)
                .then((item) => {
                  console.log(postCategory);
                  console.log(item);
                });
            }),
          );

          return postItem;
        })
        .then((postItem) => {
          return this.modelPost.findOne(postItem.id, {
            relations: [
              'user',
              'postPublication',
              'postStatus',
              'postVisibility',
              'category',
            ],
          });
        });

      return this.mapPostOut(postCreated);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  private mapPostOut(postCreated: Post) {
    return new PostOutputDto(
      postCreated.id,
      postCreated.title,
      postCreated.content,
      postCreated.shortDescription,
      postCreated.thumbnail,
      postCreated.keywords,
      postCreated.postStatus.id,
      postCreated.postVisibility.id,
      postCreated.postPublication.id,
      postCreated.datePublish,
      postCreated.createAt,
      postCreated.updateAt,
      postCreated.isActive,
      postCreated.user,
    );
  }

  async getAll(
    offset = 0,
    limit = 10,
    caterogyId = 0,
    statusId = 0,
  ): Promise<PostOutputDto[]> {
    try {
      const postList = await this.modelPost.find({
        where: {
          isActive: true,
          id: 3,
        },
        order: {
          datePublish: 'ASC',
        },
        relations: [
          'user',
          'postPublication',
          'postStatus',
          'postVisibility',
          'category',
        ],
        skip: offset,
        take: limit,
      });

      return postList.map(this.mapPostOut);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getById(id: number): Promise<PostOutputDto> {
    try {
      const postUnico = await this.modelPost.findOne({
        where: { id },
        relations: [
          'category',
          'user',
          'postPublication',
          'postStatus',
          'postVisibility',
        ],
      });

      return this.mapPostOut(postUnico);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
