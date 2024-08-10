import { ProductCard } from '@/components/common';
import { Column, Flex, Row } from '@artimisjs/ui';
import React from 'react';
import Section from '../Section/Section';

interface CarouselProps {
  products: {
    src: string;
    name: string;
    href: string;
  }[];
}

const Carousel = ({ products }: CarouselProps) => {
  return (
    <Section>
      <div className="gap-4 flex h-[50%] lg:!flex-row flex-col">
        {products.map((product) => (
          <ProductCard
            key={product.name}
            href={product.href}
            name={product.name}
            src={product.src}
          />
        ))}
      </div>
    </Section>
  );
};

export default Carousel;
