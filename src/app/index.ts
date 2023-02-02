import './styles/index.scss';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import { hasSlotPlugin } from '@/shared/lib/vue';
import App from './App.vue';
import { router } from './router';
// eslint-disable-next-line import/no-unresolved
import 'virtual:svg-icons-register';

const initApp = () => {
  const pinia = createPinia();
  const app = createApp(App);

  app.use(router);
  app.use(hasSlotPlugin);
  app.use(pinia);
  app.mount('#app');
};

export { initApp };
