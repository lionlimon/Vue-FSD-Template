<template>
  <svg
    :width="props.width"
    :height="props.height"
    aria-hidden="true"
    :style="style"
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
  color?: string
}

const props = withDefaults(defineProps<Props>(), {
  prefix: 'icon',
  color: 'black',
});

const symbolId = computed(() => `#${props.prefix}-${props.name}`);
const style = computed(() => ({ color: `rgb(var(--${props.color}))` }));
</script>
