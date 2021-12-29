import Axios from 'axios';
import dayjs from 'dayjs';
import store from '../store';

export const axios = Axios.create({
  baseURL:
    'https://aproxyserver.herokuapp.com/https://api.jobboard.tedbree.com/v1',
  headers: {
    // 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
  }
});

axios.interceptors.request.use(
  (config) => {
    const token = store.state.token;
    // delete config.headers.common['Content-Type'];
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// export const axios = {
//   get: (url) => {
//     return fetch('https://api.jobboard.tedbree.com/v1' + url, {
//       method: 'GET'
//     });
//   },
//   post: (url, payload) => {
//     return fetch('https://api.jobboard.tedbree.com/v1' + url, {
//       method: 'POST',
//       body: JSON.stringify(payload),
//       headers: {
//         Accept: 'application/json'
//       },
//       mode: 'no-cors'
//     }).then((e) => ({ data: e.json() }));
//   }
// };

export const date = {
  main: (date) => dayjs(date).format('MM/DD/YYYY')
};
