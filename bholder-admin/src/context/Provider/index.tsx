import React, { useReducer } from 'react';
import { IAction } from 'interfaces';
import { UserContext, initalState } from '../user/store';
import { userReducer } from '../user/reducer';

export const Provider = (props: any) => {
  const [userState, userDispatch] = useReducer(userReducer, initalState);

  const combineReducer = {
    dispatch: (action: IAction) => userDispatch(action),
    user: userState
  };
  return (
    <UserContext.Provider value={combineReducer}>
      {props?.children}
    </UserContext.Provider>
  );
};
