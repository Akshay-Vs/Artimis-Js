import { Button, Card, Text } from '@artimisjs/ui';
import Image from 'next/image';
import React from 'react';
import './Categories.scss';

const Categories = () => {
  return (
    <section className="flex flex-col gap-8">
      <Text size="xxhuge">Shop By Style</Text>
      <Card
        height="lg"
        width="full"
        radius="xxxl"
        className="flex gap-8 bg-[#fff]"
      >
        <Card className="z-10" height="lg" width="full" radius="xxxl">
          <Card.Backdrop className="w-full h-full">
            <Image
              src="https://img.freepik.com/foto-gratis/joven-hermosa-mujer-sonriente-muestra-signo-paz-chica-moda-ropa-casual-verano-capucha-falda_158538-1425.jpg?w=840"
              height={720}
              width={720}
              alt=""
              className="h-full w-full object-center object-cover"
            />
          </Card.Backdrop>

          <Card.Footer className="w-full flex-center">
            <Text
              size="xxhuge"
              className="font-bold scale-[170%] categories__text-gradient--casual"
            >
              Casual
            </Text>
          </Card.Footer>
        </Card>

        <Card className="z-10" height="lg" width="full" radius="xxxl">
          <Card.Backdrop className="w-full h-full">
            <Image
              src="https://img.freepik.com/foto-gratis/chico-fuerte-cuerpo-musculoso-entrenamiento-cerca-valla-manana-estadio-viste-ropa-deportiva-escucha-musica-auriculares_197531-1139.jpg?w=900"
              height={800}
              width={720}
              alt=""
              className="h-full w-full object-center object-cover"
            />
          </Card.Backdrop>

          <Card.Footer className="w-full flex-center">
            <Text
              size="xxhuge"
              className="font-bold scale-[170%] categories__text-gradient--sports"
            >
              Sports
            </Text>
          </Card.Footer>
        </Card>

        <Card className="z-10" height="lg" width="full" radius="xxxl">
          <Card.Backdrop className="w-full h-full">
            <Image
              src="https://img.freepik.com/foto-gratis/empresario-posando-silla_144627-34855.jpg?w=480"
              height={720}
              width={720}
              alt=""
              className="h-full w-full object-center object-cover"
            />
          </Card.Backdrop>
          <Card.Footer className="w-full flex-center">
            <Text
              size="xxhuge"
              className="font-bold scale-[170%] categories__text-gradient--formal"
            >
              Formal
            </Text>
          </Card.Footer>
        </Card>
      </Card>
    </section>
  );
};

export default Categories;
