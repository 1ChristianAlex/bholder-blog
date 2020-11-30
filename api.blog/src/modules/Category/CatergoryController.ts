import {
  Controller,
  Post,
  Body,
  Put,
  UseGuards,
  Get,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CategInputDto, CategotyUpdateDto, CategOutputDto } from 'dto';
import { JwtAuthGuard } from '../JWTAuth/JwtAuthGuard';
import { CategoryService } from './CatergoryService';

@UseGuards(JwtAuthGuard)
@Controller('api/post/category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Post()
  public async createCategory(
    @Body() category: CategInputDto,
  ): Promise<CategOutputDto> {
    try {
      return this.categoryService.createCategory(category);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Put()
  public async updateCategory(
    @Body() body: CategotyUpdateDto,
  ): Promise<CategOutputDto> {
    try {
      return this.categoryService.updateCategory(body.category, body.id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  public async getCategory(@Body() ids: number[]): Promise<CategOutputDto[]> {
    try {
      if (ids?.length === 0) {
        throw Error('Ids is required');
      }
      return this.categoryService.getCategories(ids);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
}
