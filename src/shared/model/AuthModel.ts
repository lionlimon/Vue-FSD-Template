import { defineStore } from 'pinia';
import { http } from '@/shared/lib/http';
import { useTypedStorage } from '@/shared/lib/pinia';

// Стор только для хранения токенов и прокидывания заголовка
export const useAuthModel = defineStore('auth', {
  state: () => {
    const state = {
      accessToken: useTypedStorage('user.accessToken', ''),
    };

    http.setHeaders({
      Authorization: `Bearer ${state.accessToken}`,
    });

    return state;
  },

  actions: {
    setToken(token: string) {
      this.accessToken = token;
      http.setHeaders({
        Authorization: `Bearer ${token}`,
      });
    },
  },
});
