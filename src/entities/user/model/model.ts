import { defineStore } from 'pinia';
import { userApi } from '@/shared/api/userApi';
import { useTypedStorage } from '@/shared/lib/pinia';
import { useAuthModel } from '@/shared/model';
import { mapUserInformationFromApi } from './mappers';
import { UserInfo } from './types';

export const useUserModel = defineStore('user', {
  state: () => ({
    userInfoIsLoading: false,
    oAuthRedirectLink: userApi.oAuthLink,
    userInfo: null as UserInfo | null,
    isAuth: useTypedStorage('user.isAuth', false),
  }),

  actions: {
    async loadUserInfo() {
      try {
        this.userInfoIsLoading = true;
        const data = await userApi.getUserInformation();
        this.userInfo = mapUserInformationFromApi(data);
      } catch (e) {
        console.error(e);
        throw e;
      } finally {
        this.userInfoIsLoading = false;
      }
    },

    async getAccessToken(code: string) {
      try {
        if (!code) return;

        const accessToken = await userApi.getAccessToken(code);

        if (accessToken) {
          const authModel = useAuthModel();

          authModel.setToken(accessToken);

          this.isAuth = true;

          await this.loadUserInfo();
        }
      } catch (e) {
        console.error(e);
        throw e;
      }
    },
  },
});
