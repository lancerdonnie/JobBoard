import { axios } from '../utils';

export default {
  async login({ commit }, payload) {
    try {
      const res = await axios.post('/login', payload);
      localStorage.setItem('token', res.data.token);
      commit('SET_TOKEN', res.data.token);
      return res.data.token;
    } catch (error) {
      console.error(error);
    }
  },
  async getJobs({ commit }, params) {
    try {
      const res = await axios.get('/jobs', { params });
      return res.data;
    } catch (error) {
      console.error(error);
    }
  },
  async getMyJobs({ commit }, params) {
    try {
      const res = await axios.get('/my/jobs', { params });
      return res.data;
    } catch (error) {
      console.error(error);
    }
  }
};
