<template>
  <ActionButton
    :active="isLiked"
    @click="onButtonClick"
  >
    <SvgIcon
      name="like"
      width="24"
      height="24"
    />
  </ActionButton>
</template>

<script setup lang="ts">
import { useGalleryModel } from '@/entities/gallery';
import ActionButton from '@/shared/ui/ActionButton';
import SvgIcon from '@/shared/ui/SvgIcon';

const props = defineProps<{ id: string, isLiked: boolean }>();
const galleryModel = useGalleryModel();

const onButtonClick = () => {
  if (props.isLiked) {
    galleryModel.unlikeImage(props.id);
  } else {
    galleryModel.likeImage(props.id);
  }
};
</script>
