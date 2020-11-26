import { ICatergoryService } from './ICatergoryService';
import { CategInputDto, CategOutputDto } from 'dto';
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

  async getCategories(ids: number[]): Promise<CategOutputDto[]> {
    const listCategories = await this.category.findByIds(ids);

    return listCategories.map(this.mapCategoryOutput);
  }

  async createCategory(postCategory: CategInputDto): Promise<CategOutputDto> {
    if (await this.getCategory(postCategory)) {
      throw new Error('Categoria ja existe');
    }

    if (postCategory.image_category) {
      const urlImage = await this.bucket.uploadBaseFile(
        postCategory.image_category,
      );
      postCategory.image_category = urlImage;
    }

    const newCategory = await this.category.save({
      ...postCategory,
      createAt: new Date(),
      updateAt: new Date(),
      isActive: true,
    });

    return this.mapCategoryOutput(newCategory);
  }

  private mapCategoryOutput(newCategory: Category) {
    return new CategOutputDto(
      newCategory.id,
      newCategory.name,
      newCategory.image_category,
      newCategory.createAt,
      newCategory.updateAt,
      newCategory.isActive,
      newCategory.user,
    );
  }

  async updateCategory(
    postCategory: CategInputDto,
    id: number,
  ): Promise<CategOutputDto> {
    if (!(await this.getCategory(postCategory))) {
      throw new Error('Categoria não existe');
    }

    if (postCategory.image_category) {
      const urlImage = await this.bucket.uploadBaseFile(
        postCategory.image_category,
      );
      postCategory.image_category = urlImage;
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

    return this.mapCategoryOutput(updatedCategory);
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

  private async getCategory(
    postCategory: CategInputDto,
  ): Promise<CategOutputDto> {
    const categoryExists = await this.category.findOne(postCategory);

    if (categoryExists?.id) {
      return this.mapCategoryOutput(categoryExists);
    }

    throw Error('Categoria não existe');
  }
}
