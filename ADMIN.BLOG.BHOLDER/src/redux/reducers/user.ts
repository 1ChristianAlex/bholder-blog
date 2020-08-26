import { DELETE_USER, UPDATE_USER } from '../types/user';

interface IUserAction {
  type: string;
  payload: IUserState;
}
interface IUserState {
  name?: string;
  email?: string;
}

const INITIAL_STATE: IUserState = {
  name: '',
  email: '',
};

const userReducer = (
  state: IUserState = INITIAL_STATE,
  action: IUserAction
) => {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
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
