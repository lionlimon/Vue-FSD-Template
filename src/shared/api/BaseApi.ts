import { Response } from './types';

export default class BaseApi {
  protected baseUrl = 'http://0.0.0.0:8080/api/';

  protected async http<T>(
    url: string,
    params?: Record<string, string>,
  ): Promise<Response<T>> {
    const searchParams = params ? `?${new URLSearchParams(params).toString()}` : '';

    const response = await fetch(`${this.baseUrl}${url}${searchParams}`);
    return response.json();
  }
}
