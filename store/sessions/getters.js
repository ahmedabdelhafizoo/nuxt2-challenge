import moment from 'moment';

export default {
  getActiveSlideIndex: (state) => {
    return state.activeSlideIndex;
  },
  getSlidesItems: (state) => {
    return state.slidesItems;
  },
  getActiveSlideDate: (state) => {
    return state.slidesItems[state.activeSlideIndex]?.date;
  },
  getSessions: (state) => {
    return state.sessions;
  },
  getFilteredSessions: (state, getters) => {
    if (!getters.getActiveSlideDate) return state.sessions;
    return getters.getSessions.filter((item) => {
      const startDateTime = moment(new Date(item.start_date));
      const targetDateTime = moment(new Date(getters.getActiveSlideDate));

      return startDateTime.isSame(targetDateTime, 'day');
    });
  },
};
