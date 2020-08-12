import { UserInputDto } from 'dto';
import { User } from 'entity';

export interface IUserService {
  create(user: UserInputDto): Promise<User>;
  update(user: Omit<UserInputDto, 'id'>, id: number): Promise<User>;
}
