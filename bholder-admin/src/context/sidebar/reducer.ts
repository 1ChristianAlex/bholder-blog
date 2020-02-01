import { IAction } from 'interfaces';
import { TOGGLE_SIDEBAR } from './types';

export interface ICollapseSideBar{
  status:boolean
}

export const sideBarReducer = (state:ICollapseSideBar, action:IAction) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return {
        status: !state.status
      }

    default:
      return { status: true };
  }
};
