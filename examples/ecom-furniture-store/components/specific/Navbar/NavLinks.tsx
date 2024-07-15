import Link from 'next/link';
import { Text, Row } from '@artimisjs/ui';

type NavLinkProps = {
  label: string;
  href: string;
};

const NavLink = ({ label, href }: NavLinkProps) => (
  <Link href={href} key={label}>
    <Text size="md" className="hover:font-serif hover:font-semibold">
      {label.toUpperCase()}
    </Text>
  </Link>
);

type NavigationLinksProps = {
  links: NavLinkProps[];
};

const NavigationLinks = ({ links }: NavigationLinksProps) => {
  return (
    <Row className="flex gap-8 p-2">
      {links.map((link) => (
        <NavLink key={link.label} {...link} />
      ))}
    </Row>
  );
};

export default NavigationLinks;
