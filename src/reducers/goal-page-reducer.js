import { GOALPAGE_TOGGLE_EDIT } from '../actions/goal-page-actions';
import { GOALS_UPDATED } from '../actions/goals-actions';
import { Map } from 'immutable';
import { handleActions } from 'redux-actions';

const goalPageState = Map();

export default handleActions({
  [GOALPAGE_TOGGLE_EDIT]: state => state.set('goalEditing', !state.get('goalEditing')),
  [GOALS_UPDATED]: state => state.set('goalEditing', false)
}, goalPageState);
