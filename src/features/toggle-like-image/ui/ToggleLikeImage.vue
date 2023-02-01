<template>
  <ActionButton
    :active="buttonIsActive"
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
import { computed } from 'vue';
import { useGalleryModel } from '@/entities/gallery';
import ActionButton from '@/shared/ui/ActionButton';
import SvgIcon from '@/shared/ui/SvgIcon';

const props = defineProps<{ id: string }>();
const galleryModel = useGalleryModel();
const onButtonClick = () => galleryModel.toggleLike(props.id);
const buttonIsActive = computed(() => galleryModel.isLiked(props.id));
</script>
