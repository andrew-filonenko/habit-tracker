export const LOGIN_USERNAME = 'LOGIN_USERNAME';
export const LOGIN_PASSWORD = 'LOGIN_PASSWORD';

import { createAction } from 'redux-actions';

export const setUsername = createAction(LOGIN_USERNAME);
export const setPassword = createAction(LOGIN_PASSWORD);

