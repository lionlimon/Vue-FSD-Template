import { RouteRecordRaw } from 'vue-router';
import HomePage from '@/pages/home';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: HomePage,
    name: 'home',
  },
];

export default routes;
