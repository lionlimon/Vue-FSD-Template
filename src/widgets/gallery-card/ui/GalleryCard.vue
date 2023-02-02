<template>
  <GalleryItem
    :alt="image.alt"
    :url="image.url"
  >
    <template #actions>
      <ToggleLikeImage
        v-if="userModel.isAuth"
        :id="image.id"
        :is-liked="image.isLiked"
      />
      <ScaleImage :id="image.id" />
    </template>
  </GalleryItem>
</template>

<script setup lang="ts">
import { ScaleImage } from '@/features/scale-image';
import { ToggleLikeImage } from '@/features/toggle-like-image';
import { GalleryItem } from '@/entities/gallery';
import { GalleryImage } from '@/entities/gallery/types';
import { useUserModel } from '@/entities/user';

const userModel = useUserModel();

defineProps<{ image: GalleryImage }>();
</script>
