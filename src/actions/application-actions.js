export const APPLICATION_GOAL_ADD = 'APPLICATION_GOAL_ADD';
export const APPLICATION_GOAL_ADDED = 'APPLICATION_GOAL_ADDED';
import { createAction } from 'redux-actions';

export const add = createAction(APPLICATION_GOAL_ADD);
export const added = createAction(APPLICATION_GOAL_ADDED);
