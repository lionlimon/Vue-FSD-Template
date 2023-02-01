import { useStorage } from '@vueuse/core';

const asType = <T>(value: unknown) => value as T;

export const useTypedStorage = <T>(key: string, initialValue: T) => asType<T>(
  useStorage(key, initialValue),
);
