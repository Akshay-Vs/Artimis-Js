import React, { HTMLAttributes, PropsWithChildren } from 'react';
import { DataProvider } from '../Providers/DataProvider';
import { StyleProvider } from '../Providers/StyleProvider';
import { ProviderType } from '../types/ProviderType';

type ArtimisCoreProps = PropsWithChildren &
  HTMLAttributes<HTMLDivElement> & {
    dataProvider: ProviderType<any>;
    styleProvider: ProviderType<any>;
  };

const ArtimisCore = ({
  children,
  dataProvider,
  styleProvider,
}: ArtimisCoreProps) => {
  return (
    <DataProvider value={dataProvider.value}>
      <StyleProvider value={styleProvider.value}>{children}</StyleProvider>
    </DataProvider>
  );
};

export default ArtimisCore;
