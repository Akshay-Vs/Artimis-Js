import { ProductCard, Section } from '@/components/common';
import { Card, Column, Row, Text } from '@artimisjs/ui';
import Image from 'next/image';
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
        <Column align="center" className="scale-105 gap-6 px-20 text-center">
          <Text size="huge">Bought Together</Text>
          <Text size="xl" className="flex flex-col gap-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              auctor, sapien vel dignissim vulputate, orci metus vestibulum
              velit, vel consectetur lectus justo at justo. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Integer
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              auctor, sapien vel dignissim vulputate, orci metus vestibulum
              velit, vel consectetur lectus justo at justo.
            </p>
          </Text>
        </Column>
      </Row>
    </Section>
  );
};

export default BoughtTogether;
