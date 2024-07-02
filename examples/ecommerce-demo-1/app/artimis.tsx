'use client';
import { Header } from '@/components/layout';
import { ArtimisCore } from '@artimisjs/core';
import React, { JSXElementConstructor, ReactElement, ReactNode } from 'react';

const Artimis = ({ children }: any) => {
  return (
    <ArtimisCore dataProvider={{}} styleProvider={{}}>
      <Header />
      {children}
    </ArtimisCore>
  );
};

export default Artimis;
