import { GalleryState } from './types';

export const state = (): GalleryState => ({
  images: [],
  likedImages: [],
  foundedImages: [],
  getImagesIsLoading: false,
  searchImageIsLoading: false,
  getLikedImagesIsLoading: false,
  imageIsScaled: false,
  scaledImageId: '',
});
