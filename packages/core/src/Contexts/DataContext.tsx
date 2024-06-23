import { createContext } from 'react';

interface dataContextType {}

const DataContext = createContext<dataContextType>({});

export { DataContext };
