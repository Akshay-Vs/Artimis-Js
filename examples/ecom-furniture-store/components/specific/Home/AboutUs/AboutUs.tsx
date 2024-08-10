import { Section, TextBlock } from '@/components/common';
import { Card, Flex, Row } from '@artimisjs/ui';
import Image from 'next/image';
import React from 'react';

const AboutUs = () => {
  return (
    <Section>
      <Flex className="flex flex-col lg:!flex-row gap-8">
        <TextBlock
          title="Lorem Ipsum"
          description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor, sapien vel dignissim vulputate, orci metus vestibulum velit, vel consectetur lectus justo at justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer \n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor, sapien vel dignissim vulputate, orci metus vestibulum velit, vel consectetur lectus justo at justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer'
          }
        />
        <div className="bg-slate-200 overflow-hidden relative lg:min-h-[70vh] lg:max-h-[70vh] lg:min-w-[50vw] lg:max-w-[50vw] rounded-none">
          <Image
            src="https://images.pexels.com/photos/271614/pexels-photo-271614.jpeg"
            width={940}
            height={720}
            alt=""
            className="object-center object-cover w-ful h-full"
          />
        </div>
      </Flex>
    </Section>
  );
};

export default AboutUs;
