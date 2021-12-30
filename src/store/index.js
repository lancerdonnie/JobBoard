import { createStore } from 'vuex';
import mutations from './mutations';
import actions from './actions';

const debug = !import.meta.env.PROD;

const state = {
  token: localStorage.getItem('token') || null,
  myJobs: { data: [] },
  jobs: { data: [] }
};

export default createStore({
  state,
  mutations,
  actions,
  strict: debug
});
