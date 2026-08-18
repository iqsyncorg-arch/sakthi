import type { Messages } from "./messages/en";

/** Deep partial so locale files can omit keys and fall back to English */
export type DeepPartial<T> = T extends string
  ? string
  : T extends number | boolean | bigint | symbol | null | undefined
    ? T
    : T extends readonly (infer U)[]
      ? readonly DeepPartial<U>[]
      : T extends object
        ? { [K in keyof T]?: DeepPartial<T[K]> }
        : T;

export type PartialMessages = DeepPartial<Messages>;
