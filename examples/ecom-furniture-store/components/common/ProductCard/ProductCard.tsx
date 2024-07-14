'use client';

import { Card, Row, Text } from '@artimisjs/ui';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

interface ProductCardProps {
  src: string;
  name: string;
  href: string;
  price?: number;
}

const ProductCard = ({ src, name, href, price }: ProductCardProps) => {
  const [ishovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      className="flex flex-col h-full w-full cursor-pointer gap-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card height="md" width="full" className="rounded-none">
        <Card.Backdrop className="h-full w-full">
          <Image
            src={src}
            alt={name}
            height={720}
            width={720}
            className={`h-full w-full object-cover object-center transition-all duration-300 ${ishovered ? 'scale-105' : ''}`}
          />
        </Card.Backdrop>
      </Card>

      <Row className="flex-center-between px-1">
        <Text
          size="xl"
          className={`underline-offset-4 ${ishovered ? 'underline' : ''}`}
        >
          {name.toLocaleUpperCase()}
        </Text>
        {price ? (
          <Text size="xl" className={`underline-offset-4`}>
            €{price}
          </Text>
        ) : null}
      </Row>
    </Link>
  );
};

export default ProductCard;
