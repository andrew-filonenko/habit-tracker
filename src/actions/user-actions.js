import db from '../db';
import { createAction } from 'redux-actions';

export const USER_LOGIN = 'USER_LOGIN';
export const USER_SIGNUP = 'USER_SIGNUP';
export const USER_LOGOUT = 'USER_LOGOUT';

export const login = createAction(USER_LOGIN, (username, password) => db.login(username, password));
export const signup = createAction(USER_SIGNUP, (username, password) => db.signup(username, password));
export const logout = createAction(USER_LOGOUT, () => db.logout());

