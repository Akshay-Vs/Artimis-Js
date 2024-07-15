import { Caousel, Section } from '@/components/common';
import React from 'react';

const InteriorCollections = () => {
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
    <Section subHeading="Explore our" heading="Interior Collections">
      <Caousel products={collections} />
    </Section>
  );
};

export default InteriorCollections;
