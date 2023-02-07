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

    <Transition
      mode="out-in"
      name="fade"
    >
      <GallerySkeleton v-if="galleryModel.getImagesIsLoading" />
      <GalleryList v-else>
        <GalleryCard
          v-for="image in imageSource"
          :key="image.id"
          :image="image"
        />
      </gallerylist>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { GalleryCard } from '@/widgets/gallery-card';
import { UnscaleImage } from '@/features/unscale-image';
import {
  useGalleryModel,
  GalleryList,
  GalleryPopup,
  GallerySingleImage,
  GallerySkeleton,
} from '@/entities/gallery';
import { useUserModel } from '@/entities/user';

const galleryModel = useGalleryModel();
const userModel = useUserModel();
const route = useRoute();

const isLikedFilter = computed(() => route.query?.filter === 'liked');

const imageSource = computed(() => {
  const hasFoundedImages = galleryModel.foundedImages.length;

  if (hasFoundedImages) {
    return galleryModel.foundedImages;
  }

  return galleryModel.imagesByFilter;
});

const loadLikedImages = () => {
  if (userModel.userInfo) {
    galleryModel.loadLikedImages(userModel.userInfo.username);
  }
};

onMounted(async () => {
  if (!isLikedFilter.value) {
    galleryModel.loadImages();
  }

  if (userModel.isAuth) {
    await userModel.loadUserInfo();

    if (isLikedFilter.value) {
      loadLikedImages();
    }
  }
});

watch(route, () => {
  const listIsEmpty = !galleryModel.imagesByFilter.length;

  if (isLikedFilter.value && listIsEmpty && userModel.userInfo) {
    galleryModel.loadLikedImages(userModel.userInfo.username);
  } else if (listIsEmpty) {
    galleryModel.loadImages();
  }
});
</script>
