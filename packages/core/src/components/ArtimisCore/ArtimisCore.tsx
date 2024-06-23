import { HTMLAttributes, useState } from 'react';
import { StyleContext } from '@/contexts/StyleContext';
import { DataContext } from '@/contexts/DataContext';
import { StyleType } from '@/types';
import { defaultStyle } from '@/config/Style.default';

type ArtimisCoreProps = HTMLAttributes<HTMLDivElement> & {
  dataProvider: any;
  styleProvider?: StyleType;
  children: React.ReactNode;
};

export const ArtimisCore = ({
  children,
  dataProvider,
  styleProvider,
}: ArtimisCoreProps) => {
  const [data] = useState(dataProvider); // TODO
  const [style] = useState(styleProvider || defaultStyle);

  return (
    <DataContext.Provider value={{ data }}>
      <StyleContext.Provider value={{ style }}>
        {children}
      </StyleContext.Provider>
    </DataContext.Provider>
  );
};
