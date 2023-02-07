import { PiniaCustomProperties } from 'pinia';
import { ChangeContextInEveryMethod } from '@/shared/lib/types';

export type PiniaThis<T = object> = ThisType<T & PiniaCustomProperties>
export type WithPiniaThis<T extends object, Th> = ChangeContextInEveryMethod<
  T,
  PiniaCustomProperties & Th
>

export type PiniaGettersValues<T extends Record<string, (...args: unknown[]) => unknown>> = {
  [key in keyof T]: ReturnType<T[key]>
}

export type WithPiniaGettersThis<
  T extends Record<string, (...args: unknown[]) => unknown>,
  Th
> = ChangeContextInEveryMethod<
  T,
  T & PiniaCustomProperties & Th & PiniaGettersValues<T>
>

export type PiniaGettersThis<T extends Record<string, (...args: unknown[]) => unknown>, Th> = {
  [K in keyof T]: T[K] extends (...args: infer A) => infer R ?
    (this: Th & Exclude<T, 'getters'> & T['getters'], ...args: A) => R :
    T[K]
}
