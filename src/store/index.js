import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import * as reducers from '../reducers';

export default createStore(
  combineReducers(reducers),
  applyMiddleware(thunk, promise)
);
