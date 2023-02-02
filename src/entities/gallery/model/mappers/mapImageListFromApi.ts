import { GetImageListResponse } from '@/shared/api/galleryApi';
import { GalleryImage } from '../../types';

const mapImageListFromApi = (data: GetImageListResponse): GalleryImage[] => (
  data.map((responseItem) => ({
    id: responseItem.id,
    url: responseItem.urls.regular,
    alt: responseItem.alt_description,
    fullImageUrl: responseItem.urls.full,
    isLiked: responseItem.liked_by_user,
  }))
);

export default mapImageListFromApi;
