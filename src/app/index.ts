import './styles/index.scss';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import { router } from '@/pages';
import { hasSlotPlugin } from '@/shared/lib/vue';
import App from './App.vue';
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
