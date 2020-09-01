import { DELETE_USER, UPDATE_USER } from '../types/user';
import { IUser } from 'interfaces';

interface IUserAction {
  type: string;
  payload: IUser;
}

const INITIAL_STATE: IUser = {
  id: 0,
  email: '',
  firstName: '',
  lastName: '',
  image: '',
};

const userReducer = (state: IUser = INITIAL_STATE, action: IUserAction) => {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        ...action.payload,
      };
    case DELETE_USER:
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
