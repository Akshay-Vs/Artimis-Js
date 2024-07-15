import { Caousel, Section } from '@/components/common';
import React from 'react';

const RoomCollections = () => {
  const collections = [
    {
      src: 'https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg',
      name: 'Modern Living Room',
      href: '#',
    },
    {
      src: 'https://images.pexels.com/photos/6963787/pexels-photo-6963787.jpeg',
      name: 'Elegent Living Space',
      href: '#',
    },
    {
      src: 'https://images.pexels.com/photos/3634740/pexels-photo-3634740.jpeg',
      name: 'Modular Kitchen',
      href: '#',
    },
  ];
  return (
    <Section subHeading="Explore our" heading="Room Collections">
      <Caousel products={collections} />
    </Section>
  );
};

export default RoomCollections;
