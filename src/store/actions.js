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
  async updateMyJob({ dispatch }, payload) {
    try {
      const result = await axios.patch(`/my/jobs/${payload.id}`, payload);
      dispatch('getMyJobs');
      return result;
    } catch (error) {
      console.error(error);
    }
  },
  async createMyJob({ dispatch }, payload) {
    try {
      const result = await axios.post(`/my/jobs`, payload);
      dispatch('getMyJobs');
      return result;
    } catch (error) {
      console.error(error);
    }
  },
  async deleteMyJob({ dispatch }, payload) {
    try {
      const result = await axios.delete(`/my/jobs/${payload}`);
      dispatch('getMyJobs');
      return result;
    } catch (error) {
      console.error(error);
    }
  },
  async applyForJob(_, payload) {
    try {
      const result = await axios.post(
        `/jobs/${payload.id}/apply`,
        payload.data
      );
      return result;
    } catch (error) {
      console.error(error);
    }
  },
  async getJobs({ commit }, params) {
    try {
      const res = await axios.get('/jobs', { params });
      commit('SET_JOBS', res.data);
    } catch (error) {
      console.error(error);
    }
  },
  async getMyJobs({ commit }, params) {
    try {
      const res = await axios.get('/my/jobs', { params });
      commit('SET_MY_JOBS', res.data);
    } catch (error) {
      console.error(error);
    }
  }
};
