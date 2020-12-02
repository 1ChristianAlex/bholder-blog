import { Category } from '../../models/CategoryModel';
import { ICategoryService } from './ICategoryService';
import Adapter from '../adapter';

class CategoryService implements ICategoryService {
  constructor(private _http: Adapter) {}

  async getCategory(categoryId?: number): Promise<Category[]> {
    try {
      const categoryList = await this._http.get<Category[]>(
        `api/category/${categoryId || ''}`
      );

      return categoryList.data;
    } catch (error) {
      throw error.mesage;
    }
  }
}

export default new CategoryService(new Adapter());
