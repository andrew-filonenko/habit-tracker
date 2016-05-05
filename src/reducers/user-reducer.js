import { handleActions } from 'redux-actions';
import { fromJS } from 'immutable';
import { USER_LOGIN, USER_LOGOUT } from '../actions/user-actions';

const user = fromJS({
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
  [USER_LOGOUT]: state => state.set('loggedIn', false)
}, user);

