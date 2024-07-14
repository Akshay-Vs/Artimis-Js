import { ProductCard } from '@/components/common';
import { Column, Row, Text } from '@artimisjs/ui';
import React from 'react';

const Collections = () => {
  const collections = [
    {
      src: 'https://images.pexels.com/photos/945688/pexels-photo-945688.jpeg',
      name: 'Elegent Interior',
      href: '#',
    },
    {
      src: 'https://images.pexels.com/photos/1125130/pexels-photo-1125130.jpeg',
      name: 'Minimalist Design',
      href: '#',
    },
    {
      src: 'https://images.pexels.com/photos/2995012/pexels-photo-2995012.jpeg',
      name: 'Modern Interior',
      href: '#',
    },
  ];
  return (
    <section className="mt-12 flex flex-col gap-8">
      <Column>
        <Text size="xl" className="text-center">
          Explore our
        </Text>
        <Text size="huge" className="text-center">
          Our Collections
        </Text>
      </Column>

      <Row className="gap-4">
        {collections.map((product) => (
          <ProductCard
            key={product.name}
            href={product.href}
            name={product.name}
            src={product.src}
          />
        ))}
      </Row>
    </section>
  );
};

export default Collections;
