import BaseApi from '../BaseApi';
import { GetAccessTokenResponse, GetUserInformationResponse } from './types';

const USER_API_BASE_URL = 'https://api.unsplash.com';
const OAUTH_API_BASE_URL = 'https://unsplash.com/oauth/';

export default class UserApi extends BaseApi {
  constructor() {
    super(USER_API_BASE_URL);
  }

  getUserInformation() {
    return this.httpClient.get<GetUserInformationResponse>(
      this.withBaseUrl('/me'),
    );
  }

  get oAuthLink() {
    const params = this.httpClient.paramsToString({
      client_id: import.meta.env.VITE_UNSPLASH_KEY,
      redirect_uri: window.location.href,
      response_type: 'code',
      scope: 'public write_likes',
    });

    return `https://unsplash.com/oauth/authorize${params}`;
  }

  async getAccessToken(code: string) {
    const url = `${OAUTH_API_BASE_URL}/token`;

    const { access_token: token } = await this.httpClient.post<GetAccessTokenResponse>(url, {
      code,
      client_id: import.meta.env.VITE_UNSPLASH_KEY,
      client_secret: import.meta.env.VITE_UNSPLASH_SECRET_KEY,
      redirect_uri: `${window.location.origin}/`,
      grant_type: 'authorization_code',
    });

    this.httpClient.setHeaders({
      Authorization: `Bearer ${token}`,
    });

    return token;
  }
}
