import { Card, Text } from '@artimisjs/ui';
import Image from 'next/image';
import React from 'react';
import ProductCard from './ProductCard';

const Offers = () => {
  return (
    <section className="flex gap-8">
      <ProductCard />
      <ProductCard />
    </section>
  );
};

export default Offers;
