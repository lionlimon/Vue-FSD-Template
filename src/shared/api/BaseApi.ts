import { useStorage } from '@vueuse/core';
import { http } from '@/shared/lib/http';

export default class BaseApi {
  private baseUrl = '';

  protected httpClient: typeof http;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.httpClient = http;

    const { value: token } = useStorage('user.accessToken', '');

    this.httpClient.setHeaders({
      Authorization: token ? `Bearer ${token}`
        : `Client-ID ${import.meta.env.VITE_UNSPLASH_KEY}`,
    });
  }

  protected withBaseUrl(url: string) {
    return this.baseUrl + url;
  }
}
