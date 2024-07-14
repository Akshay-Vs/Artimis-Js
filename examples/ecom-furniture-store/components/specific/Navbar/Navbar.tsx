'use client';
import { Button, Row, Text } from '@artimisjs/ui';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useRef } from 'react';
import NavigationLinks from './NavLinks';

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const targetRef = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [100, 300], ['0vh', '-6vh']);

  const navLinks = [
    {
      label: 'Shop',
      href: '/shop',
    },
    {
      label: 'Works',
      href: '/works',
    },
    {
      label: 'News',
      href: '/news',
    },
    {
      label: 'Contact',
      href: '/contact',
    },
  ];

  return (
    <motion.nav
      className="flex flex-col justify-center px-10 py-2 gap-4 fixed w-full top-0 z-50 bg-[#f6f3ec]"
      style={{ y }}
      transition={{ ease: 'easeInOut' }}
    >
      <Row className="w-full h-8" align="center" ref={targetRef}>
        <Text size="md">Free shipping above €150</Text>
      </Row>

      <Row className="flex justify-between items-center">
        <NavigationLinks links={navLinks} />

        <Row className="absolute left-1/2 transform -translate-x-1/2">
          <Text size="huge">Artimis</Text>
        </Row>

        <Button variant="outlined" className="bg-transparent gap-2 flex-center">
          <Text size="md">Cart</Text>
          <FontAwesomeIcon icon={faShoppingBasket} />
        </Button>
      </Row>
    </motion.nav>
  );
};

export default Navbar;
