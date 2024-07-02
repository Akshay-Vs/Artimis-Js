'use client';
import { Button } from '@artimisjs/ui';
import React, { ReactNode, useState } from 'react';
import './Hero.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import Carousel1 from './Carousel/Carousel1';
import Carousel2 from './Carousel/Carousel2';
import CursorFollowButton from './CursorFollowButton';

const Hero = () => {
  const carousels = [
    {
      node: <Carousel1 key={1} />,
      href: '/target1',
    },
    {
      node: <Carousel2 key={2} />,
      href: '/target2',
    },
  ];

  const [currentCarousel, setCurrentCarousel] = useState<number>(0);
  const [showCursorFollow, setShowCursorFollow] = useState(false);

  const setCarousel = (target: number) => {
    if (target > carousels.length - 1) {
      setCurrentCarousel(0);
      return;
    }

    if (target < 0) {
      setCurrentCarousel(carousels.length - 1);
      return;
    }

    setCurrentCarousel(target);
  };

  return (
    <div
      className="w-full h-[80vh] rounded-3xl overflow-hidden relative hero"
      onMouseEnter={() => setShowCursorFollow(true)}
      onMouseLeave={() => setShowCursorFollow(false)}
    >
      <div
        className="flex-center gap-4 absolute top-20 right-0 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white"
        onMouseEnter={() => setShowCursorFollow(false)}
        onMouseLeave={() => setShowCursorFollow(true)}
      >
        <Button
          buttonType="icon"
          onClick={() => setCarousel(currentCarousel - 1)}
          className="text-black"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </Button>
        <Button
          buttonType="icon"
          onClick={() => setCarousel(currentCarousel + 1)}
          className="text-black"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </Button>
      </div>

      {showCursorFollow && (
        <CursorFollowButton href={carousels[currentCarousel].href} />
      )}

      {carousels[currentCarousel].node}
    </div>
  );
};

export default Hero;
