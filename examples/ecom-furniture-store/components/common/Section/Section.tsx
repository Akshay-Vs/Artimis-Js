import React, { HTMLProps, PropsWithChildren } from 'react';
import { Column, Text } from '@artimisjs/ui';

interface SectionProps extends PropsWithChildren, HTMLProps<HTMLDivElement> {
  subHeading?: string;
  heading?: string;
  className?: string;
}

const Section = ({
  children,
  subHeading,
  heading,
  className,
  ...rest
}: SectionProps) => {
  return (
    <section className={`mt-12 flex flex-col ${className}`} {...rest}>
      <Column>
        <Text size="xl" className="text-center">
          {subHeading}
        </Text>
        <Text size="huge" className="text-center">
          {heading}
        </Text>
      </Column>
      {children}
    </section>
  );
};

export default Section;
