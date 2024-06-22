import { PropsWithChildren } from "react";

export type ProviderType<T> = PropsWithChildren & {
  value: T
}