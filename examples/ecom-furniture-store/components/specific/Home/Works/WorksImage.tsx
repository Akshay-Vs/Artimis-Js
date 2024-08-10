'use client';
import { useWindowSize } from '@/hooks';
import { Card } from '@artimisjs/ui';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react';

const WorksImage = ({ src, title }: { src: string; title: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '8%']);
  const windowSize = useWindowSize();

  return (
    <motion.div
      ref={targetRef}
      style={windowSize === 'desktop' ? { y } : undefined}
      transition={{
        type: 'spring',
        damping: 3,
        stiffness: 10,
        mass: 0.5,
      }}
    >
      {windowSize === 'desktop' ? (
        <Card height="md" width="md" className="rounded-none">
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
      ) : (
        <div className="bg-slate-200 overflow-hidden relative lg:min-h-[70vh] lg:max-h-[70vh] lg:min-w-[50vw] lg:max-w-[50vw] rounded-none">
          <Image
            src={src}
            alt={title}
            height={1080}
            width={1080}
            className="object-center object-cover h-full w-full"
          />
        </div>
      )}
    </motion.div>
  );
};

export default WorksImage;
