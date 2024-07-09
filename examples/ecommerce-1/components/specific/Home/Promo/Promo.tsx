import { Card, Video } from '@artimisjs/ui';
import React from 'react';

const Promo = () => {
  return (
    <section className="flex-center flex-col gap-4 h-screen">
      <Card
        height="lg"
        width="full"
        radius="xxxl"
        className="flex-center shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
      >
        <Card.Backdrop className="w-full h-full">
          <Video
            src="https://ik.imagekit.io/geeekg65rf/51950793.mp4?updatedAt=1720102983945"
            className="object-cover object-center w-full h-full"
          />
        </Card.Backdrop>
      </Card>
    </section>
  );
};

export default Promo;
