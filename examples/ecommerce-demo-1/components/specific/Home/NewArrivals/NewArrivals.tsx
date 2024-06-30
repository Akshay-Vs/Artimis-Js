'use client';
import { ProductCard } from '@/components/common';
import { Button, Text } from '@artimisjs/ui';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef } from 'react';

const scrollBy = (element: HTMLElement, x: number, duration: number) => {
  const startX = element.scrollLeft;
  const startTime = performance.now();

  const animateScroll = (currentTime: number) => {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);
    element.scrollLeft = startX + x * progress;
    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  };

  requestAnimationFrame(animateScroll);
};

const NewArrivals = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (amount: number) => {
    if (scrollRef.current) {
      scrollBy(scrollRef.current, amount, 300);
    }
  };

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
    <section className="flex flex-col gap-8">
      <div className="flex-center-between">
        <Text size="xxhuge">New Arrivals</Text>
        <div className="flex-center gap-4">
          <Button buttonType="icon" onClick={() => handleScroll(-1000)}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </Button>
          <Button buttonType="icon" onClick={() => handleScroll(1000)}>
            <FontAwesomeIcon icon={faChevronRight} />
          </Button>

          <Button radius="full" size="xl">
            View All
          </Button>
        </div>
      </div>

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
    </section>
  );
};

export default NewArrivals;
