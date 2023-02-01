<template>
  <ActionButton
    class="unscale-image"
    @click="onButtonClick"
  >
    <SvgIcon
      name="close"
      width="20"
      height="20"
    />
  </ActionButton>
</template>

<script setup lang="ts">
import { useGalleryModel } from '@/entities/gallery';
import ActionButton from '@/shared/ui/ActionButton';
import SvgIcon from '@/shared/ui/SvgIcon';

const galleryModel = useGalleryModel();
const onButtonClick = () => galleryModel.unscaleImage();
</script>
