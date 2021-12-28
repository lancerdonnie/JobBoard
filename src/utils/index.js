import Axios from 'axios';

export const axios = Axios.create({
  baseURL: 'https://api.jobboard.tedbree.com/v1',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});
