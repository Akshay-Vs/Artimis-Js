import { Section } from '@/components/common';
import React from 'react';
import CategoriesCard from './CategoriesCard';

const Categories = () => {
  const categories = [
    {
      src: 'https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg',
      href: '#',
      name: 'Modern',
    },
    {
      src: 'https://images.pexels.com/photos/1090092/pexels-photo-1090092.jpeg',
      href: '#',
      name: 'Elegant',
    },
    {
      src: 'https://images.pexels.com/photos/4906252/pexels-photo-4906252.jpeg',
      href: '#',
      name: 'Outdoor',
    },
    {
      src: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=2070',
      href: '#',
      name: 'Decorative',
    },
    {
      src: 'https://images.unsplash.com/photo-1610276099599-67d69ba55d1e?q=80&w=2070',
      href: '#',
      name: 'Kitchen',
    },
    {
      src: 'https://images.unsplash.com/photo-1683181181300-44c0c991a2cf?q=80&w=2071',
      href: '#',
      name: 'Storage',
    },
  ];
  return (
    <Section heading="Categories" subHeading="Shop By" className="gap-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category) => (
          <CategoriesCard
            key={category.href}
            name={category.name}
            src={category.src}
            href={category.href}
          />
        ))}
      </div>
    </Section>
  );
};

export default Categories;
