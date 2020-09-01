import { DELETE_USER, UPDATE_USER } from '../types/user';
import { IUser } from 'interfaces';

const updateUser = (payload: IUser) => ({ type: UPDATE_USER, payload });

const deleteUser = () => ({ type: DELETE_USER });

export { updateUser, deleteUser };
