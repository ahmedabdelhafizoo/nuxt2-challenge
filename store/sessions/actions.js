import { DEFAULT_SESSIONS } from '@/constants/sessions';
import { updateDateWithNewDate } from '@/helpers/dates';

export default {
  initSlidesItems({ commit }, slidesCount) {
    const result = [];
    for (let i = 0; i <= slidesCount; i++) {
      // set date for each slide
      const date = new Date();
      date.setDate(date.getDate() + i);

      result.push({
        id: i + 1,
        date,
      });
    }
    commit('setSlidesItems', result);
  },
  initSessions({ commit, getters }) {
    if (getters.getSessions.length) return;
    // generate sessions based on last 3 dates from default sessions array
    const latestThreeSessionsDates = getters.getSlidesItems.map((item) => item.date).slice(0, 3);

    const sessions = [];
    latestThreeSessionsDates.forEach((date, index) => {
      const group = DEFAULT_SESSIONS.map((session, sessionIndex) => {
        return {
          ...session,
          id: `${index}-${sessionIndex}`,
          start_date: updateDateWithNewDate(session.start_date, date),
          end_date: updateDateWithNewDate(session.end_date, date),
          company_name: `${session.company_name}-${index + 1}`,
        };
      });
      sessions.push(...group);
    });
    commit('setSessions', sessions);
  },
};
