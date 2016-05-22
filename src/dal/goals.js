import set from 'lodash/set';
import moment from 'moment';
import { DAYS } from '../constants';
import { local as db } from '../db';
import fromPairs from 'lodash/fromPairs';
import map from 'lodash/map';

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


export function getReports(day) {
  const datetime = moment(day);
  const startkey = datetime.day(0).format('YYYY-MM-DD');
  const endkey = datetime.day(6).format('YYYY-MM-DD');
  return db.query('goalIncrements/byGoalType', { startkey, endkey })
    .then(({ rows }) => {
      return rows.reduce((progress, { key: date, value: { goal: code, value } }) => {
        const day = moment(date).day();
        const weekView = progress[code]
          ? updateWeekView(day, value, progress[code])
          : updateWeekView(day, value);
        return { ...progress, [code]: weekView };
      }, {});
    });
}

export function getGoals() {
  return db.query('goals/ids', { include_docs: true })
    .then(({ rows }) => fromPairs(rows.map(({ id, doc }) => [id, doc])));
}

export function checkDay(action) {
  const { code: goal, day, increment } = action;
  const currentDate = new Date();
  const datetime = getDateForDay(day, currentDate);
  const { id, doc } = dateValDoc(goal, datetime, increment);
  return db.upsert(id, dateValDiff(doc, increment)).then(() => action);
}

export function updateGoals(draftGoal) {
  const keys = Object.keys(draftGoal);
  return db.allDocs({ keys, include_docs: true })
    .then(({ rows }) => rows.map(({ doc, id }) => ({ ...doc, ...draftGoal[id] })))
    .then(docs => db.bulkDocs(docs));
}

