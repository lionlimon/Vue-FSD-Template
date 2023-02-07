import galleryApi from '@/shared/api/galleryApi';
import { mapImageListFromApi } from './mappers';
import { GalleryActions } from './types';

export const actions: GalleryActions = {
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

  async loadLikedImages(username: string) {
    try {
      this.getLikedImagesIsLoading = true;
      const data = await galleryApi.getLikedImageList(username);

      this.likedImages = mapImageListFromApi(data);
    } catch (e) {
      console.error(e);
      throw e;
    } finally {
      this.getLikedImagesIsLoading = false;
    }
  },

  async likeImage(id: string) {
    const image = this.imagesByFilter.find((curImage) => curImage.id === id);
    try {
      if (image) {
        image.isLiked = true;
      }

      await galleryApi.likeImage(id);
    } catch (e) {
      if (image) {
        image.isLiked = false;
      }

      console.error(e);
      throw e;
    }
  },

  async unlikeImage(id: string) {
    const image = this.imagesByFilter.find((curImage) => curImage.id === id);
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
};
