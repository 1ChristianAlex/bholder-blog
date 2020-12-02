import { CategInputDto, CategOutputDto } from 'dto';

export interface ICatergoryService {
  createCategory(category: CategInputDto): Promise<CategOutputDto>;
  updateCategory(category: CategInputDto, id: number): Promise<CategOutputDto>;
  deleteCategory(id: number): Promise<void>;
  getCategories(id: number): Promise<CategOutputDto[]>;
}
