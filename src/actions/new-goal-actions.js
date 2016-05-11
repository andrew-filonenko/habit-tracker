export const NEWGOAL_SET = 'NEWGOAL_SET';
export const NEWGOAL_SUBMIT = 'NEWGOAL_SUBMIT';
import uuid from 'node-uuid';
import { local } from '../db';

import { createAction } from 'redux-actions';

function goalDoc({ title, negative }) {
  return {
    id: `goal.${uuid()}`,
    doc: {
      type: 'goal',
      title,
      negative
    }
  };
}

export const set = createAction(NEWGOAL_SET);
export const submit = createAction(NEWGOAL_SUBMIT, goal => {
  const { id, doc } = goalDoc(goal);
  return local.upsert(id, () => doc).then(() => ({ id, goal }));
});

