import { Column, Text } from '@artimisjs/ui';
import Link from 'next/link';
import React, { ReactNode } from 'react';

type Link = {
  label: string;
  href: string;
};

const FooterLink = ({ href, label }: Link): ReactNode => (
  <Link href={href} key={href} className="hover:underline">
    <Text size="md" className="font-[500]">
      {label}
    </Text>
  </Link>
);

const FooterLinksGroup = ({
  title,
  links,
}: {
  title: string;
  links: Link[];
}) => (
  <Column key={title} className="gap-2">
    <Text size="2x" className="font-[500] mb-2">
      {title}
    </Text>
    {links.map((link) => (
      <FooterLink key={link.href} href={link.href} label={link.label} />
    ))}
  </Column>
);

export { FooterLink, FooterLinksGroup };
export type { Link };
