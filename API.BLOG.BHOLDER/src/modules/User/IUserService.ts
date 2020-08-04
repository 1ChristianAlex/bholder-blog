import { IUserInputDto } from 'interfaces';
import { User } from 'entity';

export interface IUserService {
  create(user: IUserInputDto): Promise<User>;
  update(user: Omit<IUserInputDto, 'id'>, id: number): Promise<User>;
}
