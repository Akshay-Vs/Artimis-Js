'use client';
import { Card } from '@artimisjs/ui';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react';

const WorksImage = ({ src, title }: { src: string; title: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '8%']);

  return (
    <motion.div
      ref={targetRef}
      style={{ y }}
      transition={{
        type: 'spring',
        damping: 3,
        stiffness: 10,
        mass: 0.5,
      }}
    >
      <Card className="rounded-none" height="md" width="md">
        <Card.Backdrop className="h-full w-full">
          <Image
            src={src}
            alt={title}
            height={1080}
            width={1080}
            className="object-center object-cover h-full w-full"
          />
        </Card.Backdrop>
      </Card>
    </motion.div>
  );
};

export default WorksImage;
