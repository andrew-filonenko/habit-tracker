import { GOALS_GET_REPORTS } from '../actions/goals-actions';
import { APPLICATION_GOAL_ADD, APPLICATION_GOAL_ADDED } from '../actions/application-actions';
import { NEWGOAL_SUBMIT } from '../actions/new-goal-actions';
import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';

const defaultState = fromJS({
  goalsLoaded: false,
  reportsLoaded: false,
  goalAdding: false,
  goalEditing: false
});

const set = (k, v) => state => state.set(k, v);

export default handleActions({
  [GOALS_GET_REPORTS]: set('reportsLoaded', true),
  [APPLICATION_GOAL_ADD]: set('goalAdding', true),
  [APPLICATION_GOAL_ADDED]: set('goalAdding', false),
  [NEWGOAL_SUBMIT]: set('goalAdding', false),
}, defaultState);
