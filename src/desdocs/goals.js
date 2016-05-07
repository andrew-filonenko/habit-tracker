/* global emit */
export default {
  views: {
    byWeek: {
      map({ type, _id }) {
        if (type === 'goal') emit(_id);
      }
    },
    byGoalType: {
      map({ type, goal, date, value }) {
        if (type === 'dayly-goal-value') emit(date, { goal, value });
      }
    }
  }
};

