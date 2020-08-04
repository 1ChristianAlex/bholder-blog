import { createContext } from 'react';
import { IUser } from 'interfaces';
import { ICollapseSideBar } from '../sidebar/reducer';

export const initalState: IUser = {};

interface IContext {
  user: IUser;
  collapseSideBar: ICollapseSideBar;
  dispatch: React.Dispatch<any>;
}
const context = {
  user: initalState,
  collapseSideBar: {
    status: true
  },
  dispatch: () => {}
};

const AppContext = createContext<IContext>(context);

const formContext = {
  dispatch: () => {},
  form: {}
};

interface IFormContext {
  form: object | any;
  dispatch: React.Dispatch<any>;
}
const FormContext = createContext<IFormContext>(formContext);

export { AppContext, FormContext, formContext };
