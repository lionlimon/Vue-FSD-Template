import { hasSlot } from '@/shared/lib/vue';

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $hasSlot: typeof hasSlot;
  }

}

declare module 'pinia' {
  import type Router from 'vue-router';

  export interface PiniaCustomProperties {
    router: Router;
  }
}
