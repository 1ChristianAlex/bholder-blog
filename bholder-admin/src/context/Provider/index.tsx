import React, { useReducer } from 'react';
import { IAction } from 'interfaces';
import { AppContext, initalState, FormContext } from './store';
import { userReducer } from '../user/reducer';
import { sideBarReducer } from '../sidebar/reducer';
import { formReducer } from '../form/reducer';

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

export const FormBholder = (props: any) => {
  const [formState, formDispatch] = useReducer(formReducer, {});

  const combineReducer = {
    dispatch: (action: IAction) => {
      formDispatch(action);
    },
    form: formState
  };
  return (
    <FormContext.Provider value={combineReducer}>
      {props?.children}
    </FormContext.Provider>
  );
};
