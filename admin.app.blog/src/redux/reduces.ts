import { combineReducers, Reducer } from 'redux';
import { User } from '../models/UserModel';
import actions from './actions';

const INITIAL_USER = new User();

const user: Reducer = (state = INITIAL_USER, action) => {
  const { types } = actions;

  switch (action.type) {
    case types.UPDATE_USER:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

const reducerRange = { user };

const reducers = combineReducers(reducerRange);

interface StoreData {
  user: User;
}

export type { StoreData };

export default reducers;
