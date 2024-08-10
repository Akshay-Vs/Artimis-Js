'use client';

import { Card, Row } from '@artimisjs/ui';
import Link from 'next/link';
import React, { useState } from 'react';
import ProductImage from './ProductImage';
import ProductName from './ProductName';
import ProductPrice from './ProductPrice';

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
      className="flex flex-col lg:h-full w-full cursor-pointer gap-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card height="sm" width="full" className="rounded-none">
        <ProductImage
          src={src}
          name={name}
          height={720}
          width={720}
          isHovered={ishovered}
        />
      </Card>

      <Row className="flex-center-between px-1">
        <ProductName name={name} isHovered={ishovered} />
        <ProductPrice price={price} />
      </Row>
    </Link>
  );
};

export default ProductCard;
