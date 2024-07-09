'use client';
import { Card, Video } from '@artimisjs/ui';
import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

const Promo = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 1],
    ['100%', '100%', '130%', '130%']
  );

  return (
    <section className="relative flex-col gap-4 h-[300vh]" ref={targetRef}>
      <motion.div className="sticky top-[10vh] h-screen" style={{ scale }}>
        <Card
          height="lg"
          width="full"
          radius="xxxl"
          className="shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
        >
          <video
            width="1080"
            height="1080"
            loop
            muted
            autoPlay
            preload="none"
            className="object-cover object-center w-full h-full"
          >
            <source
              src="https://ik.imagekit.io/geeekg65rf/51950793.mp4?updatedAt=1720102983945"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </Card>
      </motion.div>
    </section>
  );
};

export default Promo;
