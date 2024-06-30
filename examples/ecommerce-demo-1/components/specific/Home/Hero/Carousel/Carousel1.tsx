import React from 'react';
import Image from 'next/image';
import { Text } from '@/components/common';

const Carousel1 = () => {
  return (
    <>
      <Image
        src="https://images.unsplash.com/photo-1483985988355-763728e1935b"
        alt="hero image"
        height={1080}
        width={1480}
        className="w-full h-full object-cover object-center absolute top-0 z-[1]"
      />
      <Text
        size="xxhuge"
        className="absolute top-[18%] right-1/4 origin-left -translate-x-1/2 -translate-y-1/2 z-[5] text-white font-[500]" //clamp
      >
        Fresh Arrivals <br /> And New Selections
      </Text>
      <Text
        size="ultrahuge"
        className="absolute top-[70%] left-[50%] origin-left -translate-x-1/2 -translate-y-1/2 z-[5] hero__text-gradient--1"
      >
        Luxury
      </Text>
    </>
  );
};

export default Carousel1;
