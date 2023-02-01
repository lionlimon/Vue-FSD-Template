<template>
  <GalleryItem
    :alt="image.alt"
    :url="image.url"
  >
    <template #actions>
      <ToggleLikeImage :id="image.id" />
      <ScaleImage :id="image.id" />
    </template>
  </GalleryItem>
</template>

<script setup lang="ts">
import { ScaleImage } from '@/features/scale-image';
import { ToggleLikeImage } from '@/features/toggle-like-image';
import { GalleryItem } from '@/entities/gallery';
import { GalleryImage } from '@/entities/gallery/types';

defineProps<{ image: GalleryImage }>();
</script>
