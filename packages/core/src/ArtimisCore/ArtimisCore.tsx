import { HTMLAttributes, useState } from 'react';
import { DataContext } from '../Contexts/DataContext';
import { StyleContext } from '../Contexts/StyleContext';
import { StyleType } from '../types';

type ArtimisCoreProps = HTMLAttributes<HTMLDivElement> & {
  dataProvider: any;
  styleProvider: StyleType;
  children: React.ReactNode;
};

export const ArtimisCore = ({
  children,
  dataProvider,
  styleProvider,
}: ArtimisCoreProps) => {
  const [data] = useState(dataProvider); // TODO
  const [style] = useState(styleProvider);

  return (
    <DataContext.Provider value={{ data }}>
      <StyleContext.Provider value={{ style }}>
        {children}
      </StyleContext.Provider>
    </DataContext.Provider>
  );
};
