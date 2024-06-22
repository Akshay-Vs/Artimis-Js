export type ContextType<T> = {
  data: T;
  setData: React.Dispatch<React.SetStateAction<T>>;
}