import { ProductCard } from '@/components/common';
import React from 'react';

type ProductScrollProps = {
  scrollRef: React.RefObject<HTMLDivElement>;
};

const ProductScroll = ({ scrollRef }: ProductScrollProps) => {
  const products = [
    {
      src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f',
      category: 'women',
    },
    {
      src: 'https://images.unsplash.com/photo-1527010154944-f2241763d806',
      category: 'Men',
    },
    {
      src: 'https://images.unsplash.com/photo-1511852365831-4c1b2b2b1325',
      category: 'Kids',
    },
    {
      src: 'https://images.unsplash.com/photo-1599309329365-0a9ed45a1da3',
      category: 'women',
    },
    {
      src: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc',
      category: 'women',
    },
    {
      src: 'https://images.unsplash.com/photo-1603986153795-d142dbbe0ae0',
      category: 'women',
    },
  ];

  return (
    <div
      className="flex gap-4 overflow-x-scroll whitespace-nowrap"
      ref={scrollRef}
    >
      {products.map((product, index) => {
        return (
          <ProductCard
            key={index}
            className={`${index === 0 ? 'min-w-[50vw] max-w-[50vw]' : ''} cursor-pointer`}
            category={product.category}
            src={product.src}
          />
        );
      })}
    </div>
  );
};

export default ProductScroll;
