<template>
  <ActionButton
    @click="onButtonClick"
  >
    <SvgIcon
      name="zoom"
      width="24"
      height="24"
    />
  </ActionButton>
</template>

<script setup lang="ts">
import { useGalleryModel } from '@/entities/gallery';
import ActionButton from '@/shared/ui/ActionButton';
import SvgIcon from '@/shared/ui/SvgIcon';

const props = defineProps<{ id: string }>();
const galleryModel = useGalleryModel();
const onButtonClick = () => galleryModel.scaleImage(props.id);
</script>
