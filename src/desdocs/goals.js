/* global emit */
export default {
  views: {
    byWeek: {
      map({ type, _id }) {
        if (type === 'goal') emit(_id);
      }
    }
  }
};

