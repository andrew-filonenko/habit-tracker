import { handleActions } from 'redux-actions';
import { fromJS } from 'immutable';
import { USER_LOGIN, USER_LOGOUT, USER_GET_SESSION } from '../actions/user-actions';

const user = fromJS({
  sessionChecked: false,
  loggedIn: false,
  errorMessage: null
});

export default handleActions({
  [USER_LOGIN]: {
    next(state) {
      return state.merge({ loggedIn: true, errorMessage: null });
    },
    throw(state, { payload: { message } }) {
      return state.set('errorMessage', message);
    }
  },
  [USER_GET_SESSION]: {
    next(state, { payload: { userCtx: { name } } }) {
      if (!name) return state.set('sessionChecked', true);
      return state.merge({ sessionChecked: true, loggedIn: true });
    }
  },
  [USER_LOGOUT]: () => user
}, user);

