import { createStore, combineReducers } from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';

const reducers = combineReducers();

const configureStore = (preloadedState = {}) => {
  let store = createStore(reducers, preloadedState);

  if (process.env.NODE_ENV === 'development') {
    store = createStore(reducers, preloadedState, composeWithDevTools());
  }

  return store;
};

export default configureStore;
