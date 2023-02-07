import { GalleryGetters } from './types';

export const getters: GalleryGetters = {
  scaledImage() {
    return this.imagesByFilter.find((image) => image.id === this.scaledImageId) ?? null;
  },

  imagesByFilter() {
    if (this.router.currentRoute.query?.filter === 'liked') {
      return this.likedImages;
    }

    return this.images;
  },
};
