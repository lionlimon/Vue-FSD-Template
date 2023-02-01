<template>
  <Teleport
    to="body"
  >
    <Transition name="fade">
      <div
        v-if="isOpen"
        class="gallery-popup"
      >
        <div
          v-if="$hasSlot('actions')"
          class="gallery-popup__actions"
        >
          <slot name="actions" />
        </div>
        <div class="gallery-popup__content">
          <slot />
        </div>
        <div
          class="gallery-popup__overlay"
          @click="$emit('onOverlayClick')"
        />
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
defineProps<{
  isOpen: boolean
}>();
defineEmits(['onOverlayClick']);
</script>

<style scoped lang="scss" src="./GalleryPopup.scss"></style>
