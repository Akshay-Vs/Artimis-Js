import { ProductCard, Section } from '@/components/common';
import { Button, Row, Text } from '@artimisjs/ui';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ProductsGrid = () => {
  const products = [
    {
      src: 'https://images.pexels.com/photos/6436780/pexels-photo-6436780.jpeg',
      name: 'Elegent Table With Chairs',
      href: '#',
    },
    {
      src: 'https://images.pexels.com/photos/6903158/pexels-photo-6903158.jpeg',
      name: 'Modern Kitchen Table',
      href: '#',
    },
    {
      src: 'https://images.unsplash.com/photo-1682662046486-23b39bda0799?q=80&w=2070',
      name: 'Minimal Living Space Set',
      href: '#',
    },
    {
      src: 'https://images.unsplash.com/photo-1646775814663-95874b77fd4f?q=80&w=2069',
      name: 'Elegant Table Setup',
      href: '#',
    },
    {
      src: 'https://images.unsplash.com/photo-1668911491639-3ab356ec92ce?q=80&w=2070',
      name: 'Modern Dining Table',
      href: '#',
    },
    {
      src: 'https://images.unsplash.com/photo-1536405109642-06b8995d4c0f?q=80&w=2070',
      name: 'Ergonomic Office Table',
      href: '#',
    },
  ];
  return (
    <Section
      heading="Trending Products"
      subHeading="Explore Our"
      className="gap-8"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12">
        {products.map((product) => (
          <ProductCard
            key={product.href}
            src={product.src}
            name={product.name}
            href={product.href}
          />
        ))}
      </div>
      <Row align="center">
        <Button variant="outlined" className="bg-transparent gap-2 flex-center">
          <Text size="xl">All Products</Text>
          <FontAwesomeIcon icon={faArrowRight} className="mt-1" />
        </Button>
      </Row>
    </Section>
  );
};

export default ProductsGrid;
