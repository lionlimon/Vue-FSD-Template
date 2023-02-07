export type ChangeContextInEveryMethod<T extends object, Th> = {
  [K in keyof T]: T[K] extends (...args: infer A) => infer R ?
    (this: Th & T, ...args: A) => R :
    T[K]
}
