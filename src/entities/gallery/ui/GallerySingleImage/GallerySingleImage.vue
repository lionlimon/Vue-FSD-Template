<template>
  <img
    class="gallery-single-image"
    :src="url"
    :alt="alt ?? 'no description'"
  >
</template>

<script setup lang="ts">
defineProps<{ url: string, alt: string | null }>();
</script>

<style scoped lang="scss" src="./GallerySingleImage.scss"></style>
