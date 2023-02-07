import BaseApi from '../BaseApi';
import { GetImageListResponse, SearchImageListResponse } from './types';

const GALLERY_BASE_URL = 'https://api.unsplash.com';
export default class GalleryApi extends BaseApi {
  constructor() {
    super(GALLERY_BASE_URL);
  }

  getImageList() {
    return this.httpClient.get<GetImageListResponse>(
      this.withBaseUrl('/photos'),
    );
  }

  likeImage(photoId: string) {
    return this.httpClient.post(
      this.withBaseUrl(`/photos/${photoId}/like`),
    );
  }

  unlikeImage(photoId: string) {
    return this.httpClient.delete(
      this.withBaseUrl(`/photos/${photoId}/like`),
    );
  }

  search(query: string) {
    return this.httpClient.get<SearchImageListResponse>(
      this.withBaseUrl('/search/photos'),
      { query },
    );
  }

  getLikedImageList(username: string) {
    return this.httpClient.get<GetImageListResponse>(
      this.withBaseUrl(`/users/${username}/likes`),
    );
  }
}
