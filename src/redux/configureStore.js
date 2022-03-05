import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import bookReducer, { fetchBooks } from './books/books';

const reducer = combineReducers({ bookReducer });
const store = createStore(reducer, applyMiddleware(logger, thunk));
store.dispatch(fetchBooks());

export default store;
