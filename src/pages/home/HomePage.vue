<template>
  <div class="home">
    <GalleryPopup
      :is-open="galleryModel.imageIsScaled"
      @on-overlay-click="galleryModel.unscaleImage()"
    >
      <GallerySingleImage
        v-if="galleryModel.scaledImage"
        :url="galleryModel.scaledImage.fullImageUrl"
        :alt="galleryModel.scaledImage.alt"
      />

      <template #actions>
        <UnscaleImage />
      </template>
    </GalleryPopup>

    <GalleryList>
      <GalleryCard
        v-for="image in imageSource"
        :key="image.id"
        :image="image"
      />
    </gallerylist>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted } from 'vue';
import { GalleryCard } from '@/widgets/gallery-card';
import { UnscaleImage } from '@/features/unscale-image';
import {
  useGalleryModel, GalleryList, GalleryPopup, GallerySingleImage,
} from '@/entities/gallery';
import { useUserModel } from '@/entities/user';

const galleryModel = useGalleryModel();
const userModel = useUserModel();

const imageSource = computed(() => {
  if (galleryModel.foundedImages.length) {
    return galleryModel.foundedImages;
  }
  return galleryModel.images;
});

onMounted(() => {
  galleryModel.loadImages();

  if (userModel.isAuth) {
    userModel.loadUserInfo();
  }
});
</script>
