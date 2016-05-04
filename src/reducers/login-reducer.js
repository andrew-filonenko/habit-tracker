import createReducer from './createReducer';
import { Map } from 'immutable';
import { LOGIN_USERNAME, LOGIN_PASSWORD } from '../actions/login-actions';

const defaultCreds = Map({
  username: '',
  password: ''
});

export default createReducer(defaultCreds, {
  [LOGIN_USERNAME]: (state, { payload: username }) => state.set('username', username),
  [LOGIN_PASSWORD]: (state, { payload: password }) => state.set('password', password)
});
