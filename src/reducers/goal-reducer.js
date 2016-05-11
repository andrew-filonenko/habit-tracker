import { GOALS_CHECK_DAY, GOALS_GET_REPORTS, GOALS_GET_GOALS } from '../actions/goals-actions';
import { NEWGOAL_SUBMIT } from '../actions/new-goal-actions';
import { fromJS, List } from 'immutable';
import { handleActions } from 'redux-actions';
import { DAYS } from '../constants';

const weeklyProgress = fromJS({
  goals: {},
  reports: {}
});

export default handleActions({
  [GOALS_CHECK_DAY]: (state, { payload: { code, day, increment } }) => {
    const report = state.getIn(['reports', code]) || List(Array(7).fill(0));
    return state.setIn(['reports', code], report.update(DAYS.indexOf(day), v => v + increment));
  },
  [GOALS_GET_REPORTS]: (state, { payload: weekViews }) => {
    const reports = state.get('reports').merge(fromJS(weekViews));
    return state.set('reports', reports);
  },
  [GOALS_GET_GOALS]: (state, { payload: goals }) => state.set('goals', fromJS(goals)),
  [NEWGOAL_SUBMIT]: (state, { payload: { id, goal } }) => {
    const goals = state.get('goals').merge(fromJS({ [id]: goal }));
    return state.set('goals', goals);
  }
}, weeklyProgress);
