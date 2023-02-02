import { Router } from 'vue-router';
import { useUserModel } from '@/entities/user';

export default function initHandlers(router: Router) {
  router.beforeEach((to, from, next) => {
    const code = to.query?.code;
    if (code && typeof code === 'string') { // after oAuth redirect
      delete to.query.code;
      const userModel = useUserModel();

      userModel.getAccessToken(code);
      next({ path: to.path, query: to.query });
    } else {
      next();
    }
  });
}
