export const GOALS_CHECK_DAY = 'GOALS_CHECK_DAY';
export const GOALS_GET_GOALS = 'GOALS_GET_GOALS';
export const GOALS_GET_REPORTS = 'GOALS_GET_REPORTS';
export const GOALS_UPDATED = 'GOALS_UPDATED';
import { createAction } from 'redux-actions';
import * as dal from '../dal/goals';

export const getReports = createAction(GOALS_GET_REPORTS, dal.getReports);

export const getGoals = createAction(GOALS_GET_GOALS, dal.getGoals);

export const checkDay = createAction(GOALS_CHECK_DAY, dal.checkDay);

export const update = createAction(GOALS_UPDATED, updates => {
  return dal
    .updateGoals(updates)
    .then(() => updates);
});

