import Vuex from 'vuex';
import VueToast from 'vue-toast-notification';
import mutations from '../src/store/mutations';
import actions from '../src/store/actions';
import data from '../src/utils/data';
import router from '../src/router';

const state = {
  user: {
    avatar: ''
  },
  myJobs: { data: data },
  jobs: { data: data }
};

const store = new Vuex.Store({
  state,
  mutations,
  actions
});

export const options = {
  global: {
    plugins: [store, router, VueToast]
  }
};

export default store;
