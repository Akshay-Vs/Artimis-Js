import { createContext } from 'react';
import { StyleType } from '../types';

interface StyleContextType {
  style: StyleType;
}

const StyleContext = createContext<StyleContextType>({
  style: {
    theme: {
      dark: {
        primary: '#fff',
        secondary: '#000',
        accent: '#9ad3f',
      },
      light: {
        primary: '#000',
        secondary: '#fff',
        accent: '#9ad3f',
      },
    },
  },
});

export { StyleContext };
