import { IAction } from 'interfaces';
import { initalState } from './store';

export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';


export const userReducer = (state = initalState, action:IAction) => {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        ...action.payload
      }
    case DELETE_USER:
      return {
        ...initalState
      };

    default:
      return state;
  }
};
