import { ProductCardFull } from '@/components/common';
import { Text } from '@artimisjs/ui';
import Link from 'next/link';
import { title } from 'process';
import React from 'react';

const Offers = () => {
  const offers = [
    {
      src: 'https://img.freepik.com/foto-gratis/adorable-mujer-morena-viste-abrigo-rosa_197531-13205.jpg?ga=GA1.1.332027238.1719849478&semt=ais_user&w=800',
      description:
        'Elegant evening dress that captures attention. Ideal for special occasions and formal events.',
      title: 'Elegant Dress',
      price: 79.99,
      colors: ['#f87171', '#60a5fa', '#34d399'],
      sizes: ['s', 'm', 'l'],
    },
    {
      src: 'https://img.freepik.com/foto-gratis/mujer-joven-hermoso-vestido-sombrero_1303-17517.jpg?w=800',
      description:
        'Comfortable and casual Top, perfect for everyday wear. Durable and stylish for any occasion.',
      title: 'Casual Top',
      price: 49.99,
      colors: ['#60a5fa', '#4c6e9e', '#9e5c4c'],
      sizes: ['s', 'm', 'l', 'xl', 'xxl'],
    },
    {
      src: 'https://img.freepik.com/foto-gratis/retrato-guapo-modelo-lambersexual-estilo-hipster-peinado-rizado-hombre-sexy-vestido-chaqueta-jeans-hombre-moda-aislado-pared-azul-estudio-gafas-sol_158538-26554.jpg?w=800',
      description:
        'Cozy knit Shirt. Stay warm and fashionable during the cooler months.',
      title: 'Vibrant Shirt',
      price: 29.99,
      colors: ['#34d399', '#7c52a4', '#3e8d5e'],
      sizes: ['s', 'm', 'l', 'xl'],
    },
    {
      src: 'https://img.freepik.com/foto-gratis/elegante-joven-apuesto_1301-5870.jpg?w=800',
      description:
        'Classic black leather jacket, a must-have in any wardrobe. Perfect for adding an edge to your look.',
      title: 'Classic Leather Jacket',
      price: 99.99,
      colors: ['#000000', '#34d399', '#e54854', '#2f6ea6'],
      sizes: ['s', 'm', 'l', 'xl'],
    },
    {
      src: 'https://img.freepik.com/foto-gratis/retrato-alta-moda-joven-hermosa-mujer-morena-bonito-traje-azul-moda-modelo-moda-sexy-posando-estudio-mujer-moda-aislada_158538-22188.jpg?w=800',
      description:
        'Elegant Dress, suitable for both office and casual wear. Comfortable and chic.',
      title: 'Elegant Dress',
      price: 34.99,
      colors: ['#fa90fc', '#e54854', '#2f6ea6'],
      sizes: ['s', 'm', 'l'],
    },
    {
      src: 'https://img.freepik.com/foto-gratis/joven-rubia-elegante-vestido-verde_155003-2663.jpg?ga=GA1.1.332027238.1719849478&semt=ais_user?w=800',
      description:
        'Stylish and versatile Top, perfect for layering and everyday wear.',
      title: 'Versatile Top',
      price: 39.99,
      colors: ['#9ca3af', '#4ca09e', '#9e4c67'],
      sizes: ['s', 'm', 'l', 'xl', 'xxl'],
    },
  ];

  return (
    <section className="flex flex-col gap-4 mt-32">
      <Text size="xxhuge">Offers For You</Text>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 lsm:grid-cols-2 gap-4">
        {offers.map((offer) => (
          <Link key={title} href={'/title'} className="rounded-3xl">
            <ProductCardFull
              src={offer.src}
              description={offer.description}
              title={offer.title}
              price={offer.price}
              colors={offer.colors}
              sizes={offer.sizes}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Offers;
