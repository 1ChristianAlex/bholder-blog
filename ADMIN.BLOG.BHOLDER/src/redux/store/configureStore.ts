import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { user } from '../reducers';
import { reducer as formReducer } from 'redux-form';

const reducers = combineReducers({ user, form: formReducer });

const configureStore = (preloadedState = {}) => {
  let store = createStore(reducers, preloadedState);

  if (process.env.NODE_ENV === 'development') {
    store = createStore(reducers, preloadedState, composeWithDevTools());
  }

  return store;
};

export default configureStore;
