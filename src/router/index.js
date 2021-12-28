import { createWebHistory, createRouter } from 'vue-router';

import store from '../store';

import LandingGuest from '../views/LandingGuest.vue';
import LandingAdmin from '../views/LandingAdmin.vue';
import Login from '../views/Login.vue';

const routes = [
  {
    path: '/',
    redirect: () => {
      return { path: store.state.token ? 'myjobs' : '/jobs' };
    }
  },
  {
    path: '/jobs',
    component: LandingGuest
  },
  {
    path: '/myjobs',
    component: LandingAdmin
  },
  {
    path: '/login',
    component: Login
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

// router.beforeEach(async (to, from) => {
//   // canUserAccess() returns `true` or `false`
//   const canAccess = await canUserAccess(to)
//   if (!canAccess) return '/login'
// })

export default router;
