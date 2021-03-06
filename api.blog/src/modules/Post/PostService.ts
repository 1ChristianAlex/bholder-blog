import { Injectable } from '@nestjs/common';
import { Category, Post, PostCategory } from 'entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In, ObjectLiteral } from 'typeorm';
import { PostInputDto, PostOutputDto } from 'dto';
import { IPostService } from './IPostServices';
import { Bucket } from 'services';
import { PostCategoryService } from './PostCategory/PostCategortyService';

Injectable();
export class PostService implements IPostService {
  constructor(
    @InjectRepository(Post) private _modelPost: Repository<Post>,
    @InjectRepository(PostCategory)
    private _postCategoryModel: Repository<PostCategory>,
    private _postCategoryService: PostCategoryService,
    private _bucket: Bucket,
  ) {}

  async update(post: PostInputDto, userId: number): Promise<PostOutputDto> {
    try {
      if (post.thumbnail) {
        const urlImage = await this._bucket.uploadBaseFile(post.thumbnail);
        post.thumbnail = urlImage;
      }

      const postCreated = await this._modelPost
        .update(
          { id: post.id },
          {
            content: post.content,
            thumbnail: post.thumbnail,
            title: post.title,
            shortDescription: post.shortDescription,
            datePublish: new Date(),
            keywords: JSON.stringify(post.keywords.filter(Boolean)),
            postPublication: { id: post.postPublicationId },
            postStatus: { id: post.postStatusId },
            postVisibility: { id: post.postPublicationId },
            user: { id: userId },
            updateAt: new Date(),
          },
        )
        .then(async () => {
          if (post.categoryIds.length > 0) {
            await this._postCategoryService.delete(post.id);
            await Promise.all(
              post.categoryIds.map(async (item) =>
                this._postCategoryService.create(post.id, item),
              ),
            );
          }
        })
        .then(async () => {
          return this._modelPost.findOne(post.id, {
            relations: [
              'postPublication',
              'postStatus',
              'postVisibility',
              'category',
            ],
            loadRelationIds: { relations: ['user'] },
          });
        });

      return this.mapPostOut(postCreated);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async create(post: PostInputDto, userId: number): Promise<PostOutputDto> {
    try {
      if (post.thumbnail) {
        const urlImage = await this._bucket.uploadBaseFile(post.thumbnail);
        post.thumbnail = urlImage;
      }

      const postCreated = await this._modelPost
        .save({
          ...post,
          datePublish: new Date(),
          keywords: JSON.stringify(post.keywords.filter(Boolean)),
          postPublication: { id: post.postPublicationId },
          postStatus: { id: post.postStatusId },
          postVisibility: { id: post.postPublicationId },
          user: { id: userId },
          updateAt: new Date(),
        })
        .then(async (postItem) => {
          if (post.categoryIds.length > 0) {
            await Promise.all(
              post.categoryIds.map(async (item) =>
                this._postCategoryService.create(postItem.id, item),
              ),
            );
          }

          return postItem;
        })
        .then(async (postItem) => {
          return this._modelPost.findOne(postItem.id, {
            relations: [
              'postPublication',
              'postStatus',
              'postVisibility',
              'category',
            ],
            loadRelationIds: { relations: ['user'] },
          });
        });

      return this.mapPostOut(postCreated);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  private mapPostOut(postCreated: Post) {
    return new PostOutputDto({
      ...postCreated,
      postPublicationId: postCreated?.postPublication?.id,
      postStatusId: postCreated?.postStatus?.id,
      postVisibilityId: postCreated?.postVisibility?.id,
    });
  }

  async getAll(
    offset: number,
    limit: number,
    caterogyId: number,
    statusId: number,
  ): Promise<PostOutputDto[]> {
    try {
      const whereCondition: ObjectLiteral = {};

      if (caterogyId) {
        const postCategory = new PostCategory();

        postCategory.category = new Category();
        postCategory.category.id = caterogyId;

        const postFromCategory = await this._postCategoryModel
          .find({ where: postCategory, relations: ['post'] })
          .then((item) => item.map((itemCategory) => itemCategory.post.id));

        whereCondition.id = In(postFromCategory);
      }

      if (statusId) {
        whereCondition.postStatus = { id: statusId };
      }

      const postList = await this._modelPost.find({
        where: whereCondition,
        relations: ['category', 'user'],
        loadRelationIds: {
          relations: ['postPublication', 'postStatus', 'postVisibility'],
          disableMixedMap: true,
        },
        order: {
          datePublish: 'DESC',
        },
        take: limit,
        skip: offset,
      });

      return postList.map(this.mapPostOut);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getById(id: number): Promise<PostOutputDto> {
    try {
      const postComplete = await this._modelPost.findOne(id, {
        relations: ['category', 'user'],
        loadRelationIds: {
          relations: ['postPublication', 'postStatus', 'postVisibility'],
          disableMixedMap: true,
        },
        loadEagerRelations: true,
      });

      return this.mapPostOut(postComplete);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
