import { Section } from '@/components/common';
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
      <Text size="huge" className="text-center">
        Our Works
      </Text>
      <Column className="gap-24">
        {works.map((work, index) => (
          <Row
            className={`${index % 2 === 0 ? '' : 'flex-row-reverse'}`}
            key={index}
          >
            <WorksImage src={work.src} title={work.title} />

            <Column
              align="center"
              className="scale-105 gap-6 px-20 text-center"
            >
              <Text size="huge">{work.title}</Text>
              <Text size="xl" className="flex flex-col gap-4">
                {work.description.split('\n').map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </Text>
            </Column>
          </Row>
        ))}
      </Column>
    </Section>
  );
};

export default Works;
