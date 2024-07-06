'use client';
import { Header } from '@/components/layout';
import SmoothScroll from '@/components/layout/SmoothScroll/SmoothScroll';
import { ArtimisCore } from '@artimisjs/core';
import React, { PropsWithChildren } from 'react';

const Artimis = ({ children }: PropsWithChildren) => {
  return (
    <ArtimisCore dataProvider={{}} styleProvider={{}}>
      <SmoothScroll>
        <Header />
        {children}
      </SmoothScroll>
    </ArtimisCore>
  );
};

export default Artimis;
