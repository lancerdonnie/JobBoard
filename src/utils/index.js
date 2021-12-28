import Axios from 'axios';
import dayjs from 'dayjs';

export const axios = Axios.create({
  baseURL: 'https://api.jobboard.tedbree.com/v1',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const date = {
  main: (date) => dayjs(date).format('MM/DD/YYYY')
};
