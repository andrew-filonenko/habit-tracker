import { remote as db } from '../db';
import { createAction } from 'redux-actions';

export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_GET_SESSION = 'USER_GET_SESSION';

export const login = createAction(USER_LOGIN, ({ username, password }) => {
  return db.login(username, password);
});

export const logout = createAction(USER_LOGOUT, () => db.logout());

export const getSession = createAction(USER_GET_SESSION, () => db.getSession());
