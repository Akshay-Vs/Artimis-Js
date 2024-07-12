import { Button, Card, Row, Text } from '@artimisjs/ui';
import Image from 'next/image';
import React from 'react';
import './Categories.scss';

const Categories = () => {
  const categories = [
    {
      src: 'https://img.freepik.com/foto-gratis/joven-hermosa-mujer-sonriente-muestra-signo-paz-chica-moda-ropa-casual-verano-capucha-falda_158538-1425.jpg?w=840',
      name: 'Casual',
      target: '#',
    },
    {
      src: 'https://img.freepik.com/foto-gratis/chico-fuerte-cuerpo-musculoso-entrenamiento-cerca-valla-manana-estadio-viste-ropa-deportiva-escucha-musica-auriculares_197531-1139.jpg?w=900',
      name: 'Sports',
      target: '#',
    },
    {
      src: 'https://img.freepik.com/foto-gratis/empresario-posando-silla_144627-34855.jpg?w=480',
      name: 'Formal',
      target: '#',
    },
  ];
  return (
    <section className="flex flex-col gap-8">
      <Text size="xxhuge">Shop By Style</Text>
      <Row height="lg" width="full" className="flex gap-8 bg-[#fff]">
        {categories.map((category, index) => (
          <Card
            className="z-10 transition-all duration-300"
            height="lg"
            width="full"
            radius="xxxl"
            key={index}
          >
            <Card.Backdrop className="w-full h-full hover:scale-105 transition-all duration-300 cursor-pointer">
              <Image
                src={category.src}
                height={720}
                width={720}
                alt=""
                className="h-full w-full object-center object-cover "
              />
            </Card.Backdrop>

            <Card.Footer className="w-full flex-center">
              <Text
                size="xxhuge"
                className={`font-bold scale-[170%] categories__text-gradient--${index + 1}`}
              >
                {category.name}
              </Text>
            </Card.Footer>
          </Card>
        ))}
      </Row>
    </section>
  );
};

export default Categories;
