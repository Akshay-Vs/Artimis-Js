import { Input } from '@/components/common';
import { Button, Card, Column, Text } from '@artimisjs/ui';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  const footerLinks = {
    'Quick Menu': ['Home', 'Products', 'Offers', 'Contacts'],
    Categories: ['Men', 'Women', 'Kids'],
    Company: [
      'Partners',
      'Return Policy',
      'Privacy policy',
      'Terms and Condition',
    ],
  };

  const footerImages = [
    {
      src: 'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg',
      alt: 'image 1, a person wearing a yellow outfit',
      className: 'top-10 left-10 h-72 w-48',
    },
    {
      src: 'https://images.pexels.com/photos/1619697/pexels-photo-1619697.jpeg',
      alt: 'image 2, a person wearing a yellow outfit',
      className: 'top-24 right-10 h-48 w-64',
    },
    {
      src: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg',
      alt: 'image 3, a person wearing a yellow outfit',
      className: 'top-64 right-[28%] h-32 w-24',
    },
  ];

  return (
    <section className="flex flex-col gap-8">
      <Card
        height="lg"
        width="full"
        radius="xxxl"
        className="bg-[#f5f5f5] h-[60vh]"
      >
        {footerImages.map((image, index) => (
          <Card
            key={index}
            height="fit"
            width="fit"
            radius="xxxl"
            className={`absolute object-cover object-center ${image.className}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              height={390}
              width={420}
              className="h-full w-full object-cover object-center"
            />
          </Card>
        ))}

        <Card.Backdrop className="h-full w-full z-10">
          <Column align="top" className="h-full w-full gap-8 mt-[10%]">
            <Text size="xxhuge" className="font-[600]">
              Stay In Touch
            </Text>
            <Input
              type="email"
              name="email"
              autoComplete="email"
              placeholder="Enter Email Here"
              containerClassName="w-[32%]"
            >
              <Button
                size="md"
                radius="xxl"
                variant="outlined"
                className="bg-black text-white active:bg-[#2e2e2e] duration-75 active:shadow-[rgba(0,_0,_0,_0.25)_0px_15px_10px_-12px]"
              >
                Subscribe
              </Button>
            </Input>
          </Column>
        </Card.Backdrop>

        <Card.Footer className="flex w-full px-10 gap-20 z-10">
          {Object.entries(footerLinks).map(([category, links], index) => (
            <Column align="left" className="gap-1" key={index}>
              <Text size="xl" className="font-[600] mb-2">
                {category}
              </Text>
              {links.map((link, idx) => (
                <Link href="#" key={idx}>
                  <Text>{link}</Text>
                </Link>
              ))}
            </Column>
          ))}
        </Card.Footer>
        <Text
          size="banner"
          className="absolute z-[0] opacity-5 bottom-0 right-0 font-[600]"
        >
          Vita.Chic
        </Text>
      </Card>
    </section>
  );
};

export default Footer;
