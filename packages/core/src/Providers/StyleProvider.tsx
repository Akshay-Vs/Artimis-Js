import { createContext } from 'react';
import { ContextType, ProviderType } from '../types';

// TODO: ADD TYPES
const StyleContext = createContext<ContextType<any>>({
  data: null,
  setData: () => {},
});

export const StyleProvider = ({ children, value }: ProviderType<any>) => {
  return (
    <StyleContext.Provider value={value}>{children}</StyleContext.Provider>
  );
};
