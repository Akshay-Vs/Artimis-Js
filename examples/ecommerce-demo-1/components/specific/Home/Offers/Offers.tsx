import { Card, Text } from '@artimisjs/ui';
import Image from 'next/image';
import React from 'react';
import ProductCard from './ProductCard';

const Offers = () => {
  return (
    <section className="flex flex-col gap-4">
      <Text size="xxhuge">Offers For You</Text>

      <div className="flex gap-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className="flex gap-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};

export default Offers;
