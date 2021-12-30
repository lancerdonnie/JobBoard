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
  async updateMyJob(_, payload) {
    try {
      return await axios.patch(`/my/jobs/${payload.id}`, payload);
    } catch (error) {
      console.error(error);
    }
  },
  async createMyJob(_, payload) {
    try {
      const result = await axios.post(`/my/jobs`, payload);
      return result;
    } catch (error) {
      console.error(error);
    }
  },
  async deleteMyJob(_, payload) {
    try {
      const result = await axios.delete(`/my/jobs/${payload}`);
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
  async getJobs(_, params) {
    try {
      const res = await axios.get('/jobs', { params });
      return res.data;
    } catch (error) {
      console.error(error);
    }
  },
  async getMyJobs(_, params) {
    try {
      const res = await axios.get('/my/jobs', { params });
      return res.data;
    } catch (error) {
      console.error(error);
    }
  }
};
