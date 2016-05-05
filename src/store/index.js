import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import * as reducers from '../reducers';
import { createHistory } from 'history';
import { reduxReactRouter } from 'redux-router';

const reducer = combineReducers(reducers);

export default compose(
  applyMiddleware(thunk, promise),
  reduxReactRouter({ createHistory })
)(createStore)(reducer);
