import { ProductCard } from '@/components/common';
import { Column, Row, Text } from '@artimisjs/ui';
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
      <Row className="gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.name}
            href={product.href}
            name={product.name}
            src={product.src}
          />
        ))}
      </Row>
    </Section>
  );
};

export default Carousel;
