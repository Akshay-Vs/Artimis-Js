import { Section, TextBlock } from '@/components/common';
import { Column, Row, Text } from '@artimisjs/ui';
import React from 'react';
import WorksImage from './WorksImage';

const Works = () => {
  const works = [
    {
      src: 'https://images.unsplash.com/photo-1632935190508-bd46801c14af?q=80&w=1887',
      href: '#',
      title: 'Living Space',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor, sapien vel dignissim vulputate, orci metus vestibulum velit, vel consectetur lectus justo at justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor, sapien vel dignissim vulputate, orci metus vestibulum velit, vel consectetur lectus justo at justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer',
    },
    {
      src: 'https://images.pexels.com/photos/9249371/pexels-photo-9249371.jpeg',
      href: '#',
      title: 'Outdoors',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor, sapien vel dignissim vulputate, orci metus vestibulum velit, vel consectetur lectus justo at justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor, sapien vel dignissim vulputate, orci metus vestibulum velit, vel consectetur lectus justo at justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer',
    },
    {
      src: 'https://images.pexels.com/photos/273671/pexels-photo-273671.jpeg',
      href: '#',
      title: 'Office Space',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor, sapien vel dignissim vulputate, orci metus vestibulum velit, vel consectetur lectus justo at justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor, sapien vel dignissim vulputate, orci metus vestibulum velit, vel consectetur lectus justo at justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer',
    },
  ];

  return (
    <Section className="gap-8">
      <Text size="5x" className="text-center">
        Our Works
      </Text>
      <Column className="gap-24">
        {works.map((work, index) => (
          <Row
            className={`flex-col gap-8 ${index % 2 === 0 ? 'lg:!flex-row' : 'lg:!flex-row-reverse'}`}
            key={index}
          >
            <WorksImage src={work.src} title={work.title} />

            <TextBlock title={work.title} description={work.description} />
          </Row>
        ))}
      </Column>
    </Section>
  );
};

export default Works;
