import { IAction, IUser } from 'interfaces';
import { DELETE_USER, UPDATE_USER } from './types';


export const userReducer = (state:IUser, action:IAction) => {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        ...action.payload
      }
    case DELETE_USER:
      return {

      };

    default:
      return state;
  }
};
