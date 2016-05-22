import { Map, fromJS } from 'immutable';
import { handleActions } from 'redux-actions';
import {
  DRAFTGOAL_GOAL_CHANGE,
  DRAFTGOAL_CANCEL,
  DRAFTGOAL_DELETE
} from '../actions/draft-goal-actions';
import { GOALS_UPDATED } from '../actions/goals-actions';

const draftGoal = Map();

export default handleActions({
  [DRAFTGOAL_GOAL_CHANGE]: (state, { payload: {
    title,
    code
  } }) => state.set(code, fromJS({ title })),
  [DRAFTGOAL_DELETE]: (state, { payload: code }) => state.setIn([code, '_deleted'], true),
  [GOALS_UPDATED]: () => draftGoal,
  [DRAFTGOAL_CANCEL]: () => draftGoal,
}, draftGoal);
