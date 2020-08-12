import { CategInputDto } from 'dto';
import { Category } from 'entity';

export interface ICatergoryService {
  createCategory(category: CategInputDto): Promise<Category>;
  updateCategory(category: CategInputDto, id: number): Promise<Category>;
  deleteCategory(id: number): Promise<void>;
  getCategories(ids: number[]): Promise<Category[]>;
}
