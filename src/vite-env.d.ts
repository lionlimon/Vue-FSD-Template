/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';

  const component: DefineComponent<Record<string, unknown>, Record<string, unknown>, unknown>;
  export default component;
}

declare module '*.scss';

interface ImportMeta {
  readonly env: {
    VITE_UNSPLASH_KEY: string
    VITE_UNSPLASH_SECRET_KEY: string
  }
}

export {};
