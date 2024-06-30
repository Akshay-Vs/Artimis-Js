import { Text } from '@/components/common';
import Image from 'next/image';
import React from 'react';

const Carousel2 = () => {
  return (
    <>
      <Image
        src="https://images.unsplash.com/photo-1568046738192-c7b997c41f1d"
        alt="hero image"
        height={1080}
        width={1480}
        className="w-full h-full object-cover object-top absolute top-0 z-[1]"
      />
      <Text
        size="xxhuge"
        className="absolute text-end top-[32%] right-[4%] transform  -translate-y-1/2 z-[5] text-[#ffffff] font-[600]"
      >
        Stay Cool <br /> With Summer Wears
      </Text>
      <Text
        size="ultrahuge"
        className="absolute top-[70%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-[5] hero__text-gradient--2"
      >
        Comfy
      </Text>
    </>
  );
};

export default Carousel2;
