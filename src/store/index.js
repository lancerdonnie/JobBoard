import { createStore } from 'vuex';
import mutations from './mutations';
import actions from './actions';

const debug = !import.meta.env.PROD;

const state = {
  token: localStorage.getItem('token') || null
};

export default createStore({
  state,
  mutations,
  actions,
  strict: debug
});
