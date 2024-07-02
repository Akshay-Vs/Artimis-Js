'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Button, Text } from '@artimisjs/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Card } from '@artimisjs/ui';

type CardProps = {
  className?: string;
  src: string;
  category: string;
};

const ProductCard = ({ className, src, category }: CardProps) => {
  const [mouseEntered, setMouseEntered] = useState(false);

  return (
    <Card
      className={`min-w-[30vw] w-[30vw] h-[58vh] bg-slate-200 rounded-3xl overflow-hidden relative select-none ${className}`}
      onMouseEnter={() => setMouseEntered(true)}
      onMouseLeave={() => setMouseEntered(false)}
    >
      <Card.Header className="flex items-center justify-end w-full px-8">
        <Button radius="full" size="xl">
          Checkout Now
        </Button>
        <Button radius="full" size="xl" buttonType="icon">
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </Card.Header>

      <Card.Backdrop className="h-full w-full">
        <Image
          src={src}
          alt="hero image"
          height={1080}
          width={1480}
          className={`transition-all duration-300 h-full w-full object-top object-cover ${
            mouseEntered && 'scale-105'
          }`}
        />

        <Text
          size="banner"
          className={`absolute top-[50%] left-[50%] z-[5] text-[#ffffff4c] opacity-0 transition-all duration-300 -translate-x-[50%] -translate-y-[50%] text-[100%] ${
            mouseEntered && 'opacity-100'
          }`}
        >
          Click
        </Text>
      </Card.Backdrop>
      <Card.Footer className="px-8">
        <Button radius="full" size="xl">
          {category}
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default ProductCard;
