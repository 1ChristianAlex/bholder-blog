import { createStore } from 'redux';
import reducers from './reduces';
import { composeWithDevTools } from 'redux-devtools-extension';

const configureStore = (preloadedState = {}) => {
  let store = createStore(reducers, preloadedState);

  if (process.env.NODE_ENV === 'development') {
    store = createStore(reducers, preloadedState, composeWithDevTools());
  }

  return store;
};

const store = configureStore();

export default store;
