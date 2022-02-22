import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import booksReducer from './books/books';

const rootReducer = combineReducers({
  book: booksReducer,
  // additional reducers could be added here
});

const store = createStore(
  rootReducer,
  applyMiddleware(logger),
);

export default store;
