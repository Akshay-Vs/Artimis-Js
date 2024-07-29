import { Section } from '@/components/common';
import { Button, Column, Row, Text } from '@artimisjs/ui';
import { FooterLinksGroup } from './FooterLinksGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Career', href: '/career' },
        { label: 'Contact', href: '/contact' },
        { label: 'Return Policy', href: '/returnpolicy' },
        { label: 'File A Complaint', href: '/complaint' },
      ],
    },
    {
      title: 'Services',
      links: [
        { label: 'Visit Us', href: '/visit' },
        { label: 'Interior Design', href: '/design' },
        { label: 'Delivery', href: '/delivery' },
        { label: 'Custom Order', href: '/customorder' },
      ],
    },
    {
      title: 'Business',
      links: [
        { label: 'Press', href: '/press' },
        { label: 'Blog', href: '/blog' },
        { label: 'Press Releases', href: '/pressreleases' },
        { label: 'Investors', href: '/investors' },
      ],
    },
  ];

  return (
    <Section className="h-[64vh] bg-[#aea69f] py-20 relative overflow-hidden">
      <Row align="betweenHorizontal" className="w-full items-start px-14 z-10">
        {footerLinks.map(({ title, links }) => (
          <FooterLinksGroup key={title} title={title} links={links} />
        ))}

        <Column className="gap-4">
          <Text size="2x" className="font-[500]">
            News Letter
          </Text>
          <Text size="lg" className="w-[32vw]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
            pariatur voluptas minima harum recusandae ab minus eaque, aperiam
            suscipit consequuntur hic explicabo accusamus repellat.
          </Text>
          <Button
            variant="secondary"
            className="border-2 border-transparent hover:bg-black hover:border-black hover:text-white w-full h-fit py-3"
          >
            <Text size="1x">Subscribe</Text>
          </Button>
        </Column>
      </Row>

      <Column className="absolute bottom-0 flex-center w-full">
        <Column align="center" className="absolute bottom-20 z-10 gap-2">
          <Text size="4x" className="font-[500]">
            Artimis
          </Text>
          <Text size="md">
            Made with <FontAwesomeIcon icon={faHeart} size="xs" /> &{' '}
            <a
              href="https://github.com/Akshay-Vs/Artimis-Js"
              target="_blank"
              className="underline"
            >
              Artimis Js
            </a>
          </Text>
        </Column>

        <Text size="banner" className="translate-y-28 opacity-[3%] select-none">
          Artimis
        </Text>
      </Column>
    </Section>
  );
};

export default Footer;
