import { Card } from '@artimisjs/ui';
import Image from 'next/image';
import React from 'react';

const ProductCard = () => {
  return (
    <Card height="lg" width="full" radius="xxxl">
      <Card.Backdrop className="w-full h-full">
        <Image
          src="https://images.pexels.com/photos/932401/pexels-photo-932401.jpeg"
          alt="Offers"
          height={980}
          width={1080}
          className="w-full h-full object-center object-cover"
        />
      </Card.Backdrop>
    </Card>
  );
};

export default ProductCard;
