import { Section } from '@/components/common';
import { Text } from '@artimisjs/ui';
import React from 'react';

const Footer = () => {
  return (
    <Section className="h-[60vh] bg-[#262422] flex-center relative overflow-hidden">
      <Text size="xxhuge" className="text-white">
        {'<--Footer-->'}
      </Text>
      <Text
        size="xxhuge"
        className="text-white absolute bottom-0 opacity-5 scale-[200%]"
      >
        Made With Artimis JS
      </Text>
    </Section>
  );
};

export default Footer;
