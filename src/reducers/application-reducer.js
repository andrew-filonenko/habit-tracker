import { GOALS_GET_REPORTS } from '../actions/goals-actions';
import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';

const defaultState = fromJS({
  goalsLoaded: false,
  reportsLoaded: false
});

export default handleActions({
  [GOALS_GET_REPORTS]: state => state.set('reportsLoaded', true)
}, defaultState);
