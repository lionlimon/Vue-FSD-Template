<template>
  <svg
    :width="props.width"
    :height="props.height"
    aria-hidden="true"
  >
    <use
      :href="symbolId"
    />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue';

type Props = {
  name: string,
  prefix?: string,
  width: string,
  height: string,
}

const props = withDefaults(defineProps<Props>(), {
  prefix: 'icon',
});

const symbolId = computed(() => `#${props.prefix}-${props.name}`);
</script>
