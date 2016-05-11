export const GOALS_CHECK_DAY = 'CHECK_DAY';
export const GOALS_GET_GOALS = 'GET_GOALS';
export const GOALS_GET_REPORTS = 'GET_REPORTS';
import { createAction } from 'redux-actions';
import * as dal from '../dal/goals';

export const getReports = createAction(GOALS_GET_REPORTS, dal.getReports);

export const getGoals = createAction(GOALS_GET_GOALS, dal.getGoals);

export const checkDay = createAction(GOALS_CHECK_DAY, dal.checkDay);

