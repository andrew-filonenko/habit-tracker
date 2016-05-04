import { handleActions } from 'redux-actions';
import { fromJS } from 'immutable';
import { USER_LOGIN } from '../actions/user-actions';

const user = fromJS({
  loggedIn: false,
  errorMessage: null
});

export default handleActions({
  [USER_LOGIN]: {
    next(state, action) {
      return state;
    },
    throw(state, { payload: { message } }) {
      return state.set('errorMessage', message);
    }
  }
}, user);

