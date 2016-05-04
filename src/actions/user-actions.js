import db from '../db';
import { createAction } from 'redux-actions';

export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_SIGNUP = 'USER_SIGNUP';
export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS';
export const USER_SIGNUP_FAIL = 'USER_SIGNUP_FAIL';
export const USER_LOGOUT = 'USER_LOGOUT';

export const login = createAction(USER_LOGIN, (username, password) => db.login(username, password));

