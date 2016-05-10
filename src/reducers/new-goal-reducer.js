import { NEWGOAL_SET, NEWGOAL_SUBMIT } from '../actions/new-goal-actions';
import { handleActions } from 'redux-actions';
import { Map } from 'immutable';

const newGoal = new Map({});

export default handleActions({
  [NEWGOAL_SET]: (state, { payload: { name, value } }) => state.set(name, value),
  [NEWGOAL_SUBMIT]: () => newGoal
}, newGoal);
