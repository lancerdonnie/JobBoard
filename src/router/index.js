import { createWebHistory, createRouter } from 'vue-router';

import store from '../store';

import LandingGuest from '../views/LandingGuest/LandingGuest.vue';
import LandingAdmin from '../views/LandingAdmin/LandingAdmin.vue';
import Login from '../views/Auth/Login.vue';
import Register from '../views/Auth/Register.vue';

const routes = [
  {
    path: '/',
    redirect: '/jobs'
    // redirect: () => {
    //   return { path: store.state.token ? 'myjobs' : '/jobs' };
    // }
  },
  {
    path: '/jobs',
    component: LandingGuest
  },
  {
    path: '/myjobs',
    component: LandingAdmin,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    component: Login,
    meta: {
      hideForAuth: true
    }
  },
  {
    path: '/register',
    component: Register
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeEach(async (to) => {
  if (to.matched.some((record) => record.meta.hideForAuth)) {
    if (store.state.token) return '/myjobs';
  }
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.state.token) return '/login';
  }
});

export default router;
