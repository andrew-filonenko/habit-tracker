/* global emit */
export default {
  views: {
    ids: {
      map({ type, _id }) {
        if (type === 'goal') emit(_id);
      }
    }
  }
};


