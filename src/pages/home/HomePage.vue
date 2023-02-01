<template>
  <div class="home">
    <GalleryPopup
      :is-open="galleryModel.imageIsScealed"
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
        v-for="image in galleryModel.images"
        :key="image.id"
        :image="image"
      />
    </gallerylist>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { GalleryCard } from '@/widgets/gallery-card';
import { UnscaleImage } from '@/features/unscale-image';
import {
  useGalleryModel, GalleryList, GalleryPopup, GallerySingleImage,
} from '@/entities/gallery';

const galleryModel = useGalleryModel();

onMounted(() => {
  galleryModel.loadImages();
});
</script>
