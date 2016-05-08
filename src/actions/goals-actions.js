export const GOALS_CHECK_DAY = 'CHECK_DAY';
export const GOALS_GET_GOALS = 'GET_GOALS';
export const GOALS_GET_REPORTS = 'GET_GOALS';
import { createAction } from 'redux-actions';
import { local as db } from '../db';
import { DAYS } from '../constants';
import moment from 'moment';
import findIndex from 'lodash/findIndex';
import set from 'lodash/set';

function dateValDoc(goal, datetime, value) {
  const date = moment(datetime).format('YYYY-MM-DD');
  return {
    id: `goal-increment.${goal}.${date}`,
    doc: {
      type: 'dayly-goal-value',
      value,
      goal,
      date
    }
  };
}

function getDateForDay(dayname, datetime) {
  const dayIndex = DAYS.indexOf(dayname);
  return moment(datetime).day(dayIndex);
}

function dateValDiff(newDoc, value) {
  return oldDoc => {
    if (!oldDoc.value) return { ...newDoc, value };
    return { ...oldDoc, value: oldDoc.value + value };
  };
}

function makeWeekView() {
  return Array(7).fill(0);
}

function updateWeekView(day, val, weekView = makeWeekView()) {
  return set(weekView.slice(), day, val);
}

export const getReports = createAction(GOALS_GET_REPORTS, day => {
  const datetime = moment(day);
  const startkey = datetime.day(0).format('YYYY-MM-DD');
  const endkey = datetime.day(6).format('YYYY-MM-DD');
  const queryResult = db.query('goals/byGoalType', { startkey, endkey });
  return queryResult
    .then(({ rows }) => {
      return rows.reduce((progress, { key: date, value: { goal: code, value } }) => {
        const day = moment(date).day();
        const weekView = progress[code]
          ? updateWeekView(day, value, progress[code])
          : updateWeekView(day, value);
        return { ...progress, [code]: weekView };
      }, {});
    });
});

export const checkDay = createAction(GOALS_CHECK_DAY, action => {
  const { code: goal, day, increment } = action;
  const currentDate = new Date();
  const datetime = getDateForDay(day, currentDate);
  const { id, doc } = dateValDoc(goal, datetime, increment);
  return db.upsert(id, dateValDiff(doc, increment)).then(() => action);
});

