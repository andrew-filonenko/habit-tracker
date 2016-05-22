export const DRAFTGOAL_GOAL_CHANGE = 'DRAFTGOAL_GOAL_CHANGE';
export const DRAFTGOAL_CANCEL = 'DRAFTGOAL_CANCEL';
export const DRAFTGOAL_DELETE = 'DRAFTGOAL_DELETE';
import { createAction } from 'redux-actions';

export const change = createAction(DRAFTGOAL_GOAL_CHANGE);
export const cancel = createAction(DRAFTGOAL_CANCEL);
export const del = createAction(DRAFTGOAL_DELETE);
