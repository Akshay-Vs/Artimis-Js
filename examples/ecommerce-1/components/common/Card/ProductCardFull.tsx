import { Button, Card, Circle, Column, Row, Text } from '@artimisjs/ui';
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
      <Column className="h-[44vh] w-full rounded-3xl overflow-hidden">
        <Image
          src={src}
          alt={title}
          height={720}
          className="w-full h-full object-top object-cover"
          width={720}
        />
      </Column>
      <Column className="gap-4 h-[40%] px-2">
        <Column className="gap-2">
          <Text size="xl" className="font-[600] text-[#404040]">
            {title.toUpperCase()}
          </Text>
          <Text className="font-[400] text-[#717171]" size="md">
            {description}
          </Text>
        </Column>

        <Row className="flex-center-between w-full">
          <Column className="opacity-60">
            <Text className="font-[500]" size="xs">
              Sizes:
            </Text>
            <Text className="font-[500]" size="md">
              {sizes.join(' / ').toLocaleUpperCase()}
            </Text>
          </Column>

          <Column className="mr-10">
            <Text className="font-[500] opacity-60" size="xs">
              Colors:
            </Text>
            <Row align="center">
              {colors.map((color) => (
                <Circle key={color} color={color} />
              ))}
            </Row>
          </Column>
        </Row>

        <Row className="flex-center-between">
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
        </Row>
      </Column>
    </Card>
  );
};

export default ProductCardFull;
