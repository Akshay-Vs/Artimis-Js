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
    <section className={`mt-8 lg:mt-12 flex flex-col  ${className}`} {...rest}>
      <Column className="gap-1 lg:!gap-2">
        <Text size="1x" className="text-center">
          {subHeading}
        </Text>
        <Text size="5x" className="text-center">
          {heading}
        </Text>
      </Column>
      {children}
    </section>
  );
};

export default Section;
