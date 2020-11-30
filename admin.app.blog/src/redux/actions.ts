import { User } from '../models/UserModel';

const UPDATE_USER = 'user/UPDATE_USER';

const updateUser = (payload: User): any => ({ type: UPDATE_USER, payload });

export default {
  updateUser,
  types: {
    UPDATE_USER,
  },
};
