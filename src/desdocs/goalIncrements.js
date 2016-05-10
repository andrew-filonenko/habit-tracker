/* global emit */
export default {
  views: {
    byGoalType: {
      map({ type, goal, date, value }) {
        if (type === 'dayly-goal-value') emit(date, { goal, value });
      }
    }
  }
};

