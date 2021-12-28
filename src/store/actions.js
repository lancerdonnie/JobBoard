import { axios } from '../utils';

const jobs = {
  data: [
    {
      id: 'FJB-212818-MS',
      title: 'Frontend Developer Needed',
      company: 'Tedbree',
      company_logo: null,
      location: 'Lagos',
      category: 'Tech',
      salary: 'N150,000 per Month',
      description: 'Description Frontend Developer Needed',
      benefits: 'Free Meal',
      type: 'Permanent',
      work_condition: 'Remote',
      created_at: '2021-03-09T21:52:20+00:00',
      updated_at: '2021-03-09T21:52:20+00:00'
    },
    {
      id: 'FJB-311585-DB',
      title: 'Backend',
      company: 'Tedbree',
      company_logo: null,
      location: 'New york',
      category: 'Tech',
      salary: '2000000',
      description: 'uuuuuuu',
      benefits: null,
      type: 'Temporary',
      work_condition: 'Part Remote',
      created_at: '2021-03-11T00:52:07+00:00',
      updated_at: '2021-03-11T10:39:15+00:00'
    },
    {
      id: 'FJB-134697-DW',
      title: 'Backend Engineer',
      company: 'Tedbree',
      company_logo: null,
      location: 'ssss',
      category: 'Tech',
      salary: '2000000',
      description: 'sssss',
      benefits: null,
      type: 'Temporary',
      work_condition: 'Part Remote',
      created_at: '2021-03-11T01:23:52+00:00',
      updated_at: '2021-03-11T01:23:52+00:00'
    },
    {
      id: 'FJB-066507-IQ',
      title: 'Devops Engineer',
      company: 'Tedbree',
      company_logo: null,
      location: 'Delta',
      category: 'Tech',
      salary: '900000',
      description: 'aaaaaa',
      benefits: null,
      type: 'Temporary',
      work_condition: 'Part Remote',
      created_at: '2021-03-11T10:40:54+00:00',
      updated_at: '2021-03-11T10:54:56+00:00'
    },
    {
      id: 'FJB-106337-OE',
      title: 'Devops',
      company: 'Tedbree',
      company_logo: null,
      location: 'Delta',
      category: 'Tech',
      salary: '900000',
      description: 'aaaaaa',
      benefits: null,
      type: 'Temporary',
      work_condition: 'Part Remote',
      created_at: '2021-03-11T10:40:54+00:00',
      updated_at: '2021-03-11T10:40:54+00:00'
    },
    {
      id: 'FJB-640125-4T',
      title: 'QA',
      company: 'Tedbree',
      company_logo: null,
      location: 'Abuja',
      category: 'Tech',
      salary: '200000',
      description: 'aaaaaaaa',
      benefits: null,
      type: 'Contract',
      work_condition: 'Part Remote',
      created_at: '2021-03-11T10:55:31+00:00',
      updated_at: '2021-03-11T10:55:31+00:00'
    }
  ],
  links: {
    first: 'https://api.jobboard.tedbree.com/v1/jobs?page=1',
    last: 'https://api.jobboard.tedbree.com/v1/jobs?page=1',
    prev: null,
    next: null
  },
  meta: {
    current_page: 1,
    from: 1,
    last_page: 1,
    links: [
      {
        url: null,
        label: 'pagination.previous',
        active: false
      },
      {
        url: 'https://api.jobboard.tedbree.com/v1/jobs?page=1',
        label: 1,
        active: true
      },
      {
        url: null,
        label: 'pagination.next',
        active: false
      }
    ],
    path: 'https://api.jobboard.tedbree.com/v1/jobs',
    per_page: 20,
    to: 6,
    total: 6
  }
};

export default {
  async login({ commit }, payload) {
    try {
      const res = await axios.post('/login', payload);
      localStorage.setItem('token', res.data.token);
      commit('SET_TOKEN', res.data.token);
      return res.data.token;
    } catch (error) {
      console.error(error);
      localStorage.setItem('token', '12345');
      commit('SET_TOKEN', '12345');
      return '12345';
    }
  },
  async getJobs({ commit }, payload) {
    try {
      const res = await axios.get('/jobs', payload);
      console.log(res);
      return jobs;
    } catch (error) {
      console.error(error);
      return jobs;
    }
  },
  async getMyJobs({ commit }, payload) {
    try {
      const res = await axios.get('/my/jobs', payload);
      console.log(res);
      return jobs;
    } catch (error) {
      console.error(error);
      return jobs;
    }
  }
};
