import { ICatergoryService } from './ICatergoryService';
import { CategInputDto } from 'dto';
import { Injectable } from '@nestjs/common';
import { Category } from 'entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bucket } from 'services';

Injectable();
export class CategoryService implements ICatergoryService {
  constructor(
    @InjectRepository(Category) private category: Repository<Category>,
    private bucket: Bucket,
  ) {}

  async getCategories(ids: number[]): Promise<Category[]> {
    const listCategories = await this.category.findByIds(ids);

    return listCategories;
  }

  async createCategory(postCategory: CategInputDto): Promise<Category> {
    if (await this.getCategory(postCategory)) {
      throw new Error('Categoria ja existe');
    }

    if (postCategory.file) {
      const urlImage = await this.bucket.uploadMemoryFile(
        postCategory.file.path,
      );
      postCategory.image_category = urlImage;

      delete postCategory.file;
    }

    const newCategory = await this.category.save({
      ...postCategory,
      createAt: new Date(),
      updateAt: new Date(),
      isActive: true,
    });

    return newCategory;
  }

  async updateCategory(
    postCategory: CategInputDto,
    id: number,
  ): Promise<Category> {
    if (!(await this.getCategory(postCategory))) {
      throw new Error('Categoria não existe');
    }

    if (postCategory.file) {
      const urlImage = await this.bucket.uploadMemoryFile(
        postCategory.file.path,
      );
      postCategory.image_category = urlImage;

      delete postCategory.file;
    }

    const updatedCategory = await this.category
      .update(
        {
          ...postCategory,
          updateAt: new Date(),
        },
        { id },
      )
      .then(() => this.category.findOne({ id }));

    return updatedCategory;
  }

  async deleteCategory(id: number): Promise<void> {
    if (!(await this.getCategory({ id }))) {
      throw new Error('Categoria não existe');
    }

    await this.category.update(
      {
        isActive: false,
      },
      { id },
    );
  }

  private async getCategory(postCategory: CategInputDto): Promise<Category> {
    const categoryExists = await this.category.findOne(postCategory);

    if (categoryExists?.id) {
      return categoryExists;
    }

    throw Error('Categoria não existe');
  }
}
