import { UserInputDto, UserOutPutDto } from 'dto';

export interface IUserService {
  create(user: UserInputDto): Promise<UserOutPutDto>;
  update(user: Omit<UserInputDto, 'id'>, id: number): Promise<UserOutPutDto>;
}
