import { createContext } from "react";
import { IUser } from "interfaces";
import { ICollapseSideBar } from "../sidebar/reducer";

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

export { AppContext };
