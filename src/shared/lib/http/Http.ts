import { Response } from './types';

class Http {
  private headers: Record<string, string> = {};

  setHeaders(headers: Record<string, string>) {
    this.headers = { ...this.headers, ...headers };
  }

  paramsToString(params: Record<string, string>) {
    return params ? `?${new URLSearchParams(params).toString()}` : '';
  }

  private objectToFormData(obj: Record<string, string>) {
    const fd = new FormData();

    Object.entries(obj).forEach(([key, value]) => {
      fd.append(key, value);
    });

    return fd;
  }

  async http<T>(
    url: string,
    data?: Record<string, string>,
    params: Exclude<RequestInit, 'body'> = {},
  ): Promise<Response<T>> {
    const fetchParams: RequestInit = {
      headers: this.headers,
      method: 'GET',
      ...params,
    };

    const searchParamsString = fetchParams.method === 'GET' && data ? this.paramsToString(data) : '';

    if (fetchParams.method !== 'GET' && data) {
      fetchParams.body = this.objectToFormData(data);
    }

    const response = await fetch(`${url}${searchParamsString}`, fetchParams);

    return response.json();
  }

  async get<T>(url: string, data: Record<string, string> = {}) {
    return this.http<T>(url, data);
  }

  async post<T>(url: string, data?: Record<string, string>) {
    return this.http<T>(url, data, {
      method: 'POST',
    });
  }

  async delete<T>(url: string, data?: Record<string, string>) {
    return this.http<T>(url, data, {
      method: 'delete',
    });
  }
}

export const http = new Http();
