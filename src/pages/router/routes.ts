import { RouteRecordRaw } from 'vue-router';
import AboutPage from '../about';
import HomePage from '../home';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: HomePage,
    name: 'home',
  }, {
    path: '/about',
    component: AboutPage,
    name: 'about',
  },
];

export default routes;
