import { defineStore } from 'pinia';
import galleryApi from '@/shared/api/galleryApi';
import { useTypedStorage } from '@/shared/lib/pinia';
import { GalleryImage } from '../types';
import { mapImageListFromApi } from './mappers';

const useGalleryModel = defineStore('gallery', {
  state: () => ({
    images: [] as GalleryImage[],
    favoriteImages: useTypedStorage<string[]>('favoriteImages', []),
    isLoading: false,
    imageIsScealed: false,
    scaledImageId: '',
  }),

  actions: {
    async loadImages() {
      try {
        this.isLoading = true;
        const data = await galleryApi.getImageList();

        this.images = mapImageListFromApi(data);
      } catch (e) {
        console.error(e);
        throw e;
      } finally {
        this.isLoading = false;
      }
    },

    toggleLike(id: string) {
      if (this.favoriteImages.includes(id)) {
        this.favoriteImages = this.favoriteImages.filter(
          (localId) => localId !== id,
        );
      } else {
        this.favoriteImages.push(id);
      }
    },

    scaleImage(id: string) {
      this.imageIsScealed = true;
      this.scaledImageId = id;
    },

    unscaleImage() {
      this.imageIsScealed = false;
      this.scaledImageId = '';
    },
  },

  getters: {
    isLiked(store) {
      return (id: string) => store.favoriteImages.includes(id);
    },

    scaledImage(store) {
      return store.images.find((image) => image.id === this.scaledImageId) ?? null;
    },
  },
});

export default useGalleryModel;
