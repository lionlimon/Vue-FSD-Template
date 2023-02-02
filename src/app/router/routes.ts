import { RouteRecordRaw } from 'vue-router';
import { FavoritePage } from '@/pages/favorite';
import HomePage from '@/pages/home';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: HomePage,
    name: 'home',
  }, {
    path: '/favorite',
    component: FavoritePage,
    name: 'about',
  },
];

export default routes;
