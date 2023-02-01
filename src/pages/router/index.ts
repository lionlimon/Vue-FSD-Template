import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';
import initHandlers from './handlers';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

initHandlers(router);

export default router;
