'use client';
import { Header } from '@/components/layout';
import SmoothScroll from '@/components/layout/SmoothScroll/SmoothScroll';
import { ArtimisCore } from '@artimisjs/core';

const Artimis = ({ children }: any) => {
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
