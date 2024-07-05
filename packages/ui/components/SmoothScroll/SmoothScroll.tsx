'use client';
import { ReactLenis } from '@studio-freight/react-lenis';
import { PropsWithChildren } from 'react';

const SmoothScroll = ({ children }: PropsWithChildren) => {
  const lenisOptions = {
    lerp: 0.1,
    duration: 0.7,
    smoothTouch: true,
    smooth: true,
  };

  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
};
export { SmoothScroll };
