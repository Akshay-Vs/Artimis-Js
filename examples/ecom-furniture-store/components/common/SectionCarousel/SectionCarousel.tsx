import { ProductCard } from '@/components/common';
import { Column, Row, Text } from '@artimisjs/ui';
import React from 'react';
import Section from '../Section/Section';

interface SectionCarouselProps {
  products: {
    src: string;
    name: string;
    href: string;
  }[];
  subHeading: string;
  heading: string;
}

const SectionCarousel = ({
  products,
  subHeading,
  heading,
}: SectionCarouselProps) => {
  return (
    <Section>
      <Column>
        <Text size="xl" className="text-center">
          {subHeading}
        </Text>
        <Text size="huge" className="text-center">
          {heading}
        </Text>
      </Column>

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

export default SectionCarousel;
