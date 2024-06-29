'use client';
import { useState } from 'react';
import { Button, Text, ProductCard } from '../components';

type CardProps = {
  className?: string;
  src: string;
  category: string;
};

const CustomProductCard = ({ src, category }: CardProps) => {
  const [mouseEntered, setMouseEntered] = useState(false);

  return (
    <ProductCard
      onMouseEnter={() => setMouseEntered(true)}
      onMouseLeave={() => setMouseEntered(false)}
      width="md"
    >
      <div className="flex-center z-10 absolute top-8 right-8">
        <Button radius="full" size="xl">
          Checkout Now
        </Button>
        <Button radius="full" size="xl" buttonType="icon">
          Button
        </Button>
      </div>

      <ProductCard.Backdrop>
        <img src={src} alt="hero image" />

        <Text
          size="banner"
          className={`absolute top-[50%] left-[50%] z-[5] text-[#ffffff4c] opacity-0 transition-all duration-300 -translate-x-[50%] -translate-y-[50%] ${
            mouseEntered && 'opacity-100'
          }`}
        >
          Click
        </Text>
      </ProductCard.Backdrop>

      <ProductCard.Footer>
        <Button radius="full" size="xl">
          {category}
        </Button>
      </ProductCard.Footer>
    </ProductCard>
  );
};

export default CustomProductCard;
