import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import booksReducer from './books/books';

const rootReducer = combineReducers({
  booksReducer,
  // additional reducers could be added here
});

const store = createStore(
  rootReducer,
  applyMiddleware(logger, thunk),
);

export default store;
