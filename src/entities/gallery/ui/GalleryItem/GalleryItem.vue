<template>
  <div class="gallery-item">
    <img
      class="gallery-item__image"
      :src="url"
      :alt="alt ?? 'Image without description'"
    >

    <div
      v-if="$hasSlot('actions')"
      class="gallery-item__actions"
    >
      <slot name="actions" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  url: string,
  alt: string | null
}>();
</script>

<style scoped lang="scss" src="./GalleryItem.scss"></style>
