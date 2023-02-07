import { WithPiniaThis, PiniaGettersValues, WithPiniaGettersThis } from '@/shared/lib/pinia';
import { GalleryImage } from '../types';

export type GalleryState = {
  images: GalleryImage[],
  likedImages: GalleryImage[],
  foundedImages: GalleryImage[],
  getImagesIsLoading: boolean,
  searchImageIsLoading: boolean,
  getLikedImagesIsLoading: boolean,
  imageIsScaled: boolean,
  scaledImageId: string,
}

export type GalleryGetters = WithPiniaGettersThis<{
  scaledImage(): GalleryImage | null,
  imagesByFilter(): GalleryImage[],
}, GalleryState>

export type GalleryGettersValues = PiniaGettersValues<GalleryGetters>

export type GalleryActions = WithPiniaThis<{
  loadImages(): void,
  loadLikedImages(username: string): void,
  likeImage(id: string): void,
  unlikeImage(id: string): void,
  searchImages(query: string): void,
  scaleImage(id: string): void,
  unscaleImage(id: string): void,
}, GalleryState & GalleryGettersValues>
