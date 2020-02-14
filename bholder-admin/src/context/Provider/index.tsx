import React, { useReducer } from "react";
import { IAction } from "interfaces";
import { AppContext, initalState } from "./store";
import { userReducer } from "../user/reducer";
import { sideBarReducer } from "../sidebar/reducer";

export const Provider = (props: any) => {
  const [userState, userDispatch] = useReducer(userReducer, initalState);
  const [sideBarState, sideBarDispatch] = useReducer(sideBarReducer, {
    status: true
  });

  const combineReducer = {
    dispatch: (action: IAction) => {
      userDispatch(action);
      sideBarDispatch(action);
    },
    user: userState,
    collapseSideBar: sideBarState
  };
  return (
    <AppContext.Provider value={combineReducer}>
      {props?.children}
    </AppContext.Provider>
  );
};
