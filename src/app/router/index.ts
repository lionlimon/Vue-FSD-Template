import { createRouter, createWebHistory } from 'vue-router';
import initHandlers from './handlers';
import routes from './routes';

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

initHandlers(router);
