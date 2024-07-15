import { Section } from '@/components/common';
import { Card, Column, Row, Text } from '@artimisjs/ui';
import Image from 'next/image';
import React from 'react';

const AboutUs = () => {
  return (
    <Section>
      <Row>
        <Column align="center" className="scale-105 gap-6 px-20 text-center">
          <Text size="huge">Lorem Ipsum</Text>
          <Text size="xl" className="flex flex-col gap-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              auctor, sapien vel dignissim vulputate, orci metus vestibulum
              velit, vel consectetur lectus justo at justo. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Integer
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              auctor, sapien vel dignissim vulputate, orci metus vestibulum
              velit, vel consectetur lectus justo at justo.
            </p>
          </Text>
        </Column>
        <Card width="md" height="md" className="rounded-none">
          <Card.Backdrop className="h-full w-full">
            <Image
              src="https://images.pexels.com/photos/271614/pexels-photo-271614.jpeg"
              width={940}
              height={720}
              alt=""
              className="object-center object-cover w-ful h-full"
            />
          </Card.Backdrop>
        </Card>
      </Row>
    </Section>
  );
};

export default AboutUs;
