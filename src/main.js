import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import './assets/index.css';

const app = createApp(App)
  .use(store)
  .use(router)
  .use(VueToast, {
    position: 'bottom-left'
  })
  .mount('#app');

export default app;
