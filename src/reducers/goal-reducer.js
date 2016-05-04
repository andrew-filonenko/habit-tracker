import createReducer from './createReducer';
import { CHECK_DAY } from '../actions/goals-actions';
import { fromJS } from 'immutable';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const weeklyProgress = fromJS([
  {
    code: 'excercise', title: 'Excercise', weekView: [
      1, 0, 1, 0, 1, 1, 0
    ]
  },
  {
    code: 'update-blog', title: 'Update Blog', weekView: [
      0, 0, 0, 0, 0, 1, 2
    ]
  },
  {
    code: 'bring-lunch', title: 'Bring Lunch', weekView: [
      0, 1, 1, 0, 1, 1, 0
    ]
  },
  {
    code: 'eat-out', title: 'Eat Out', negative: true, weekView: [
      -1, 0, 0, -2, 0, 0, 0
    ]
  }
]);

export default createReducer(weeklyProgress, {
  [CHECK_DAY]: (state, { payload: { code, day, increment } }) => {
    const goalIdx = state.findIndex(goal => goal.get('code') === code);
    const goalPath = [goalIdx, 'weekView', DAYS.indexOf(day)];
    return state.updateIn(goalPath, v => v + increment);
  }
});
