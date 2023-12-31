import state from './state';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';

export { state, getters, mutations, actions };

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
