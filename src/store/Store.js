import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import RootReducer from '../reducers/index';

const middleware = applyMiddleware(thunk, promise);

const Store = createStore(
  RootReducer,
  compose(
      middleware,
  )
);

export default Store;
