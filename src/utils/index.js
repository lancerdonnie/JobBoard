import Axios from 'axios';
import dayjs from 'dayjs';
import store from '../store';

import app from '@/main';

export const axios = Axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
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

axios.interceptors.response.use(
  (response) => {
    if (response.data?.message) app.$toast.success(response.data.message);
    return response;
  },
  (error) => {
    if (error.response?.data?.message) {
      let errors = '\n ';
      if (error.response.data.errors)
        errors += Object.keys(error.response.data.errors)[0];
      app.$toast.error(`${error.response.data.message}${errors}`);
    } else if (error.message) {
      app.$toast.error(error.message);
    }
    return Promise.reject(error);
  }
);

export const date = {
  main: (date) => dayjs(date).format('MM/DD/YYYY')
};
