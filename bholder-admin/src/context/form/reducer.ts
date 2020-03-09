import { IAction } from 'interfaces';
import { DESTROY_FORM, INSERT_VALUE } from './types';

export interface formAction extends IAction {
  payload:
    | any
    | {
        name: string;
        value: any;
      };
}

export const formReducer = (state: any, action: formAction) => {
  switch (action.type) {
    case INSERT_VALUE:
      return { ...state, [action.payload.name]: action.payload.value };
    case DESTROY_FORM:
      return null;
    default:
      return { ...state };
  }
};
