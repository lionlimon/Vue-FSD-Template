<template>
  <div class="search-photo">
    <UiInput
      v-model="searchText"
      class="header__search"
      name="search"
      label="Search"
      placeholder="Search"
    />
  </div>
</template>

<script setup lang="ts">
import { useDebounce } from '@vueuse/core';
import { ref, watch } from 'vue';
import { useGalleryModel } from '@/entities/gallery';
import { UiInput } from '@/shared/ui/UiInput';

const searchText = ref('');
const searchValue = useDebounce(searchText, 300);
const galleryModel = useGalleryModel();

watch(searchValue, () => {
  galleryModel.searchImages(searchValue.value);
});
</script>
