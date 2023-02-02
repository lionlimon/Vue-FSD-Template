import { defineStore } from 'pinia';
import galleryApi from '@/shared/api/galleryApi';
import { useTypedStorage } from '@/shared/lib/pinia';
import { GalleryImage } from '../types';
import { mapImageListFromApi } from './mappers';

const useGalleryModel = defineStore('gallery', {
  state: () => ({
    images: [] as GalleryImage[],
    foundedImages: [] as GalleryImage[],
    favoriteImages: useTypedStorage<string[]>('favoriteImages', []),
    getImagesIsLoading: false,
    searchImageIsLoading: false,
    imageIsScaled: false,
    scaledImageId: '',
  }),

  actions: {
    async loadImages() {
      try {
        this.getImagesIsLoading = true;
        const data = await galleryApi.getImageList();

        this.images = mapImageListFromApi(data);
      } catch (e) {
        console.error(e);
        throw e;
      } finally {
        this.getImagesIsLoading = false;
      }
    },

    async likeImage(id: string) {
      const image = this.images.find((image) => image.id === id);
      try {
        if (image) {
          image.isLiked = true;
        }

        await galleryApi.likeImage(id);
      } catch (e) {
        console.error(e);

        if (image) {
          image.isLiked = false;
        }

        throw e;
      }
    },

    async unlikeImage(id: string) {
      const image = this.images.find((curImage) => curImage.id === id);
      try {
        if (image) {
          image.isLiked = false;
        }

        await galleryApi.unlikeImage(id);
      } catch (e) {
        if (image) {
          image.isLiked = true;
        }
        console.error(e);
        throw e;
      }
    },

    async searchImages(query: string) {
      try {
        this.searchImageIsLoading = true;
        const data = await galleryApi.search(query);

        this.foundedImages = mapImageListFromApi(data.results);
      } catch (e) {
        console.error(e);
        throw e;
      } finally {
        this.searchImageIsLoading = false;
      }
    },

    scaleImage(id: string) {
      this.imageIsScaled = true;
      this.scaledImageId = id;
    },

    unscaleImage() {
      this.imageIsScaled = false;
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
