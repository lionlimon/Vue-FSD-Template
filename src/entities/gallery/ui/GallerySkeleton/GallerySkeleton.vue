<template>
  <div class="gallery-skeleton">
    <div
      v-for="i in 10"
      :key="i"
      class="gallery-skeleton__item"
    />
  </div>
</template>

<style scoped lang="scss" src="./GallerySkeleton.scss"></style>
