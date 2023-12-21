export default {
  setActiveSlideIndex(state, index) {
    state.activeSlideIndex = index;
  },
  setSlidesItems(state, count) {
    state.slidesItems = count;
  },
  setSessions(state, sessions) {
    state.sessions = sessions;
  },
  removeSession(state, id) {
    const targetIndex = state.sessions.findIndex((session) => session.id === id);
    state.sessions.splice(targetIndex, 1);
  },
};
