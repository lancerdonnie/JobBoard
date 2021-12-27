import { createWebHistory, createRouter } from 'vue-router';

const Home = { template: '<div>Home</div>' };
const About = { template: '<div>About</div>' };

const routes = [
  { path: '/', component: Home },
  {
    path: '/about',
    component: () =>
      import(/* webpackChunkName: "about" */ '../components/About.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
