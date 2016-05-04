import createReducer from './createReducer';
import { Map } from 'immutable';
import { LOGIN_USERNAME, LOGIN_PASSWORD } from '../actions/login-actions';

const defaultCreds = Map({
  username: '',
  password: ''
});

export default createReducer(defaultCreds, {
  [LOGIN_USERNAME]: (state, username) => state.set({ username }),
  [LOGIN_PASSWORD]: (state, password) => state.set({ password })
});
