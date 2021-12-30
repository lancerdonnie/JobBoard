import Axios from 'axios';
import dayjs from 'dayjs';
import store from '../store';

export const axios = Axios.create({
  baseURL: 'https://api.jobboard.tedbree.com/v1'
});

axios.interceptors.request.use(
  (config) => {
    const token = store.state.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const date = {
  main: (date) => dayjs(date).format('MM/DD/YYYY')
};
