import { VueInstance } from '@vueuse/core';

/**
 * This helper checks for a component slot by slot name
 */
export default function hasSlot(this: VueInstance, name = 'default') {
  return !!this.$slots[name];
}
