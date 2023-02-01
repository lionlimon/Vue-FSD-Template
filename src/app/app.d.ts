import { hasSlot } from '@/shared/lib/vue';

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $hasSlot: typeof hasSlot;
  }
}
