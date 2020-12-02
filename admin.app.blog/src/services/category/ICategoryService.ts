import { Category } from '../../models/CategoryModel';

interface ICategoryService {
  getCategory(id?: number): Promise<Category[]>;
}

export type { ICategoryService };
