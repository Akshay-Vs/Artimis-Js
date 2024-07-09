import { createContext } from 'react';
import { StyleType } from '../types';
import { defaultStyle } from '@/config/Style.default';

interface StyleContextType {
  style: StyleType;
}

const StyleContext = createContext<StyleContextType>({
  style: defaultStyle,
});

export { StyleContext };
