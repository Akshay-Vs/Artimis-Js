'use client';
import React, { useRef } from 'react';
import NewArrivalsHeader from './Header';
import ProductScroll from './ProductScroll';
import { scrollBy } from '@/libs';

type ScrollContainerProps = {
  HeaderComponent: React.ComponentType<{
    handleScroll: (amount: number) => void;
  }>;
  ScrollComponent: React.ComponentType<{
    scrollRef: React.RefObject<HTMLDivElement>;
  }>;
};

const ScrollContainer = ({
  HeaderComponent,
  ScrollComponent,
}: ScrollContainerProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const handleScroll = (amount: number) => {
    if (scrollRef.current) {
      scrollBy(scrollRef.current, amount, 300);
    }
  };

  return (
    <section className="flex flex-col gap-8">
      <HeaderComponent handleScroll={handleScroll} />
      <ScrollComponent scrollRef={scrollRef} />
    </section>
  );
};

const NewArrivals = () => {
  return (
    <ScrollContainer
      HeaderComponent={NewArrivalsHeader}
      ScrollComponent={ProductScroll}
    />
  );
};

export default NewArrivals;
