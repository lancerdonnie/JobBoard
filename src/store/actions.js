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
  async getJobs({ commit }, payload) {
    try {
      const res = await axios.get('/jobs', payload);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  },
  async getMyJobs({ commit }, payload) {
    try {
      const res = await axios.get('/my/jobs', payload);
      return res.data;
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  }
};
