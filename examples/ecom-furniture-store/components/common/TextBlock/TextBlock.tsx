import { Column, Text } from '@artimisjs/ui';
import React from 'react';

const TextBlock = ({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) => {
  return (
    <Column align="center" className="scale-105 gap-6 px-20 text-center">
      <Text size="huge">{title}</Text>
      <Text size="xl" className="flex flex-col gap-4">
        {description
          ?.split('\n')
          .map((line, index) => <p key={index}>{line}</p>)}
      </Text>
    </Column>
  );
};

export default TextBlock;
