import {
  Controller,
  Post,
  Body,
  Res,
  Put,
  UseGuards,
  UseInterceptors,
  Get,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CategInputDto, CategotyUpdateDto } from 'dto';
import { Response } from 'express';
import { JwtAuthGuard } from '../JWTAuth/JwtAuthGuard';
import { multerConfig } from 'config/ConfigFile';
import { CategoryService } from './CatergoryService';

@UseGuards(JwtAuthGuard)
@Controller('api/post/category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Post()
  public async createCategory(
    @Body() category: CategInputDto,
    @Res() res: Response,
  ): Promise<void> {
    try {
      const categoryCreated = await this.categoryService.createCategory(
        category,
      );

      res.status(202).json(categoryCreated);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  @UseInterceptors(FileInterceptor('image', multerConfig))
  @Put()
  public async updateCategory(
    @Body() body: CategotyUpdateDto,
    @Res() res: Response,
  ): Promise<void> {
    try {
      const categoryUpdate = await this.categoryService.updateCategory(
        body.category,
        body.id,
      );

      res.status(202).json(categoryUpdate);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  @Get()
  public async getCategory(
    @Body() ids: number[],
    @Res() res: Response,
  ): Promise<void> {
    try {
      if (ids?.length === 0) {
        throw Error('Ids is required');
      }
      const categoryUpdate = await this.categoryService.getCategories(ids);

      res.status(202).json(categoryUpdate);
    } catch (error) {
      res.status(404).json(error);
    }
  }
}
