import { IAction } from 'interfaces';
import { DESTROY_FORM, INSERT_VALUE, REMOVE_FIELDS } from './types';
import { FormFunctions } from './formFunctions';

export interface formAction extends IAction {
  payload:
    | any
    | {
        name: string;
        value: any;
      };
}

export const formReducer = (state: any, action: formAction) => {
  const formFunc = new FormFunctions(state);

  switch (action.type) {
    case INSERT_VALUE:
      return { ...formFunc.insertValue(action.payload) };
    case DESTROY_FORM:
      return null;
    case REMOVE_FIELDS:
      return { ...formFunc.removeFieldValue(action.payload) };
    default:
      return { ...state };
  }
};
