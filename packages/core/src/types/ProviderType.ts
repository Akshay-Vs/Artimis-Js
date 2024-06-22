import { PropsWithChildren } from "react";

export type ProviderType<T> = PropsWithChildren & {
  value: {
    data: T;
    setData: React.Dispatch<T>;
  }
}