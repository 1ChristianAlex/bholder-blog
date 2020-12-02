import {
  Controller,
  Post,
  Body,
  Put,
  UseGuards,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { CategInputDto, CategotyUpdateDto, CategOutputDto } from 'dto';
import { JwtAuthGuard } from '../JWTAuth/JwtAuthGuard';
import { CategoryService } from './CatergoryService';

@UseGuards(JwtAuthGuard)
@Controller('api/category')
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

  @Get('/:id?')
  public async getCategory(
    @Param('id') id?: number,
  ): Promise<CategOutputDto[]> {
    try {
      const _id = Number.isInteger(id) ? id : null;
      return this.categoryService.getCategories(_id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
}
