<template>
  <div class="user-avatar">
    <img
      class="user-avatar__image"
      :src="image"
      :alt="name"
    >

    <div class="user-avatar__name">
      {{ name }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  image: string,
  name: string,
}>();
</script>

<style scoped lang="scss" src="./UserAvatar.scss"></style>
