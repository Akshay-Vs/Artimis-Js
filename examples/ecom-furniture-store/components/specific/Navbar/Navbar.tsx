'use client';
import { Button, Row, Text } from '@artimisjs/ui';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTransform, motion } from 'framer-motion';
import React, { useRef } from 'react';
import NavigationLinks from './NavLinks';
import NavigationMenu from './NavMenu';
import { useWindowSize } from '@/hooks';
import useScroll from '@/hooks/useScroll';

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const targetRef = useRef(null);
  const { scrollY, scrollRate } = useScroll();
  const y = useTransform(scrollY, [100, 300], ['0vh', '-6vh']);
  const windowSize = useWindowSize();

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
      className="fixed top-0 z-50 flex flex-col justify-center w-screen lg:w-full px-4 lg:!px-10 py-2 gap-4 bg-[#f6f3ec]"
      style={windowSize === 'desktop' ? { y } : undefined}
      transition={{ ease: 'easeInOut' }}
    >
      <Row
        className={`w-full h-8 
          ${windowSize === 'mobile' && scrollRate > 260 ? 'hidden' : null}
          `}
        align="center"
        ref={targetRef}
      >
        <Text size="md">Free shipping above €150</Text>
      </Row>

      <Row className="flex justify-between items-center">
        <NavigationLinks links={navLinks} />
        <NavigationMenu />
        <Row className="absolute left-1/2 transform -translate-x-1/2">
          <Text size="4x" className="font-[500]">
            <span className="text-blue-500">A</span>rtimis
          </Text>
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
