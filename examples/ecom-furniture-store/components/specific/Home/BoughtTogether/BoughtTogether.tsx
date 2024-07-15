import { ProductCard, Section, TextBlock } from '@/components/common';
import { Row } from '@artimisjs/ui';
import React from 'react';

const BoughtTogether = () => {
  const group = [
    {
      name: 'Modern interior Sofa',
      src: 'https://img.freepik.com/foto-gratis/diseno-interior-moderno-sala-estar_23-2150794653.jpg',
      href: '#',
    },
    {
      name: 'Modern Cushioned Chair',
      src: 'https://img.freepik.com/foto-gratis/diseno-interiores-sillon-plantas-maceta_23-2149427986.jpg',
      href: '#',
    },
  ];
  return (
    <Section>
      <Row className="h-full w-full gap-4">
        {group.map((item) => (
          <ProductCard
            href={item.href}
            name={item.name}
            src={item.src}
            key={item.href}
          />
        ))}
        <TextBlock
          title="Bought Together"
          description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor, sapien vel dignissim vulputate, orci metus vestibulum velit, vel consectetur lectus justo at justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer \n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor, sapien vel dignissim vulputate, orci metus vestibulum velit, vel consectetur lectus justo at justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer'
          }
        />
      </Row>
    </Section>
  );
};

export default BoughtTogether;
