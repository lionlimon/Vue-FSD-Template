import BaseApi from '../BaseApi';
import { GetImageListResponse } from './types';

const GALLERY_BASE_URL = 'https://api.unsplash.com';
export default class GalleryApi extends BaseApi {
  constructor() {
    super();
    this.baseUrl = GALLERY_BASE_URL;
  }

  getImageList() {
    return this.http<GetImageListResponse>('/photos', {
      client_id: import.meta.env.VITE_UNSPLASH_KEY,
    });
  }
}
