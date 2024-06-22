import React, { createContext } from 'react';
import { ContextType, ProviderType } from '../types';

const DataContext = createContext<ContextType<any>>({
  // TODO: Replace the type
  data: null,
  setData: () => {},
});

export const DataProvider = ({ children, value }: ProviderType<any>) => {
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
