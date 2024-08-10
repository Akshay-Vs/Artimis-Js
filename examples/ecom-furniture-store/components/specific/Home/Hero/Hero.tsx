'use client';
import React, { useRef } from 'react';
import { Card, Video } from '@artimisjs/ui';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const scale = useTransform(scrollYProgress, [0, 1], ['100%', '110%']);
  const marginTop = useTransform(scrollYProgress, [0, 0.5], ['10vh', '0vh']);

  return (
    <section className="lg:px-12 lg:h-[300vh] relative" ref={targetRef}>
      <motion.div className=" lg:h-[87vh] sticky top-[12vh]" style={{ scale }}>
        <Card
          width="full"
          height="full"
          className="rounded-none bg-transparent"
        >
          <motion.div style={{ marginTop }}>
            <Video src="https://video-previews.elements.envatousercontent.com/h264-video-previews/aa08dd9d-1593-4049-8ca5-a4031b828e14/44021676.mp4" />
          </motion.div>
        </Card>
      </motion.div>
    </section>
  );
};

export default Hero;
