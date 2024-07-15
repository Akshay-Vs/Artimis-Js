import React, { PropsWithChildren } from 'react';

const Section = ({ children }: PropsWithChildren) => {
  return <section className="mt-12 flex flex-col gap-8">{children}</section>;
};

export default Section;
