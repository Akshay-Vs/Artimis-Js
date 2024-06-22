export type ContextType<T> = {
  data: T;
  action: React.Dispatch<React.SetStateAction<T>>;
}