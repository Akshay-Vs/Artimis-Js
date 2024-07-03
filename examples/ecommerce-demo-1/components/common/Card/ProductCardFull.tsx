'use client';
import { Button, Card, Text } from '@artimisjs/ui';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';

type ProductCardProps = {
  src: string;
  title: string;
  description: string;
  price: number;
  sizes: string[];
  colors: string[];
};

const ProductCardFull = ({
  src,
  title,
  description,
  price,
  sizes,
  colors,
}: ProductCardProps) => {
  return (
    <Card
      height="fit"
      width="full"
      radius="xxxl"
      className="bg-[#fcfcfc] border-[1px] flex flex-col gap-4 p-3 cursor-pointer transition-all duration-300 hover:border-[#6c6c6c]"
    >
      <div className="h-[44vh] w-full rounded-3xl overflow-hidden">
        <Image
          src={src}
          alt={title}
          height={720}
          className="w-full h-full object-top object-cover"
          width={720}
        />
      </div>
      <div className="flex flex-col gap-4 h-[40%] px-2">
        <div className="flex flex-col gap-2">
          <Text size="xl" className="font-[600] text-[#404040]">
            {title.toUpperCase()}
          </Text>
          <Text className="font-[400] text-[#717171]" size="md">
            {description}
          </Text>
        </div>

        <div className="flex-center-between w-full">
          <div className="opacity-60">
            <Text className="font-[500]" size="xs">
              Sizes:
            </Text>
            <Text className="font-[500]" size="md">
              <>{sizes.join(' / ').toUpperCase}</>
            </Text>
          </div>
          <div className="mr-10">
            <Text className="font-[500] opacity-60" size="xs">
              Colors:
            </Text>
            <div className="flex-center">
              {colors.map((color) => (
                <div
                  className="h-4 w-4 rounded-full"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex-center-between">
          <Text size="xl" className="font-[600] text-[#404040]">
            Price: ${price}
          </Text>
          <Text className="font-[500]" size="lg">
            <Button size="xl" radius="full" className="px-10">
              <span className="flex-center gap-4">
                Shop Now
                <FontAwesomeIcon icon={faShoppingBag} />
              </span>
            </Button>
          </Text>
        </div>
      </div>
    </Card>
  );
};

export default ProductCardFull;
