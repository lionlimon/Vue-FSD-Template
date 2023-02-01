import { Router } from 'vue-router';

export default function initHandlers(router: Router) {
  // Сохранение последнего роута для удобства использования расширения
  // let isFirstTransition = true;
  // router.afterEach((to) => {
  //   if (!to.name) return;
  //   localStorage.setItem('lastRoute', to.name as string);
  // });
  //
  // router.beforeEach((to, from, next) => {
  //   const lastRouteName = localStorage.getItem('lastRoute');
  //   if (lastRouteName && isFirstTransition) {
  //     next({ name: lastRouteName });
  //   } else {
  //     next();
  //   }
  //
  //   isFirstTransition = false;
  // });
}
