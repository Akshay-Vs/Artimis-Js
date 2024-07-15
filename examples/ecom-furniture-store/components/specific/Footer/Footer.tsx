import { Section } from '@/components/common';
import { Text } from '@artimisjs/ui';
import React from 'react';

const Footer = () => {
  return (
    <Section className="h-[60vh] bg-[#262422] flex-center">
      <Text size="xxhuge" className="text-white">
        {'<--Footer-->'}
      </Text>
      <Text size="lg" className="text-white">
        Made With Artimis Js
      </Text>
    </Section>
  );
};

export default Footer;
