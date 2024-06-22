import React, { createContext } from 'react';
import { ContextType } from '../types';
import { ProviderType } from '../types/ProviderType';

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
