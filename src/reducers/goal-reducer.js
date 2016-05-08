import { GOALS_CHECK_DAY, GOALS_GET_REPORTS } from '../actions/goals-actions';
import { fromJS, List } from 'immutable';
import forEach from 'lodash/forEach';
import { handleActions } from 'redux-actions';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
function makeWeekView() {
  return Array(7).fill(0);
}

const weekView = makeWeekView();

const weeklyProgress = fromJS([
  {
    code: 'excercise', title: 'Excercise', weekView
  },
  {
    code: 'update-blog', title: 'Update Blog', weekView
  },
  {
    code: 'bring-lunch', title: 'Bring Lunch', weekView
  },
  {
    code: 'eat-out', title: 'Eat Out', negative: true, weekView
  }
]);

export default handleActions({
  [GOALS_CHECK_DAY]: (state, { payload: { code, day, increment } }) => {
    const goalIdx = state.findIndex(goal => goal.get('code') === code);
    const goalPath = [goalIdx, 'weekView', DAYS.indexOf(day)];
    return state.updateIn(goalPath, v => v + increment);
  },
  [GOALS_GET_REPORTS]: (state, { payload: weekViews }) => {
    return state.withMutations(state => {
      forEach(weekViews, (weekView, code) => {
        const goalIdx = state.findIndex(x => x.get('code') === code);
        state.setIn([goalIdx, 'weekView'], List(weekView));
      });
    });
  },
}, weeklyProgress);
