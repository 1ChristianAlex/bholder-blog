import { IUser } from 'interfaces';
import { DELETE_USER, UPDATE_USER } from './reducer';

export const updateUser = (user:IUser) => ({
  type: UPDATE_USER,
  payload: user
})
export const deleteUser = () => ({
  type: DELETE_USER
});
