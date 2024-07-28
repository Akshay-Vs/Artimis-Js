import React from 'react';
import { Card, Column, Text } from '@artimisjs/ui';
import Image from 'next/image';
import Link from 'next/link';

interface CategoriesCardProps {
  src: string;
  name: string;
  href: string;
}

const CategoriesCard = ({ src, name, href }: CategoriesCardProps) => {
  return (
    <Link href={href}>
      <Card
        height="sm"
        width="full"
        className="rounded-none hover:border-[#583b1d] border-[2px] transition-all duration-300"
      >
        <Card.Backdrop className="h-full w-full">
          <Image
            src={src}
            width={940}
            height={720}
            alt={name}
            className="object-center object-cover w-ful h-full z-0"
          />
          <Column
            className="absolute top-0 left-0 h-full w-full z-10 bg-[#39240e90] bg-blend-saturation
             text-white flex flex-col gap-2 hover:backdrop-blur-sm duration-300 transition-all"
            align="center"
          >
            <Text size="5x" className="font-[500]">
              {name}
            </Text>
            <Text size="1x" className="font-[500]">
              View
            </Text>
          </Column>
        </Card.Backdrop>
      </Card>
    </Link>
  );
};

export default CategoriesCard;
