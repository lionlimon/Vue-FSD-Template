<template>
  <button
    :class="['action-button', iconModifiers]"
    :title="title"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  title?: string,
  active?: boolean,
}>();

const iconModifiers = computed(() => ({
  'action-button--success': !!props.active,
}));
</script>

<style scoped lang="scss" src="./ActionButton.scss"></style>
