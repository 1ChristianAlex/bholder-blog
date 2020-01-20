import { createContext, useContext } from 'react';
import { IUser } from 'interfaces';

export const initalState:IUser = {};

const context = {
  user: initalState,
  dispatch: () => {}
}

export const UserContext = createContext<{user:IUser, dispatch:React.Dispatch<any>}>(context);

export const useUser = () => {
  const { user } = useContext(UserContext);
  return user
}
export const useDispatch = () => {
  const { dispatch } = useContext(UserContext);
  return dispatch
}
