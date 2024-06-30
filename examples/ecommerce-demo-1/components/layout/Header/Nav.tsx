import { Button, Hamburger, Text } from '@/components/common';
import { colors } from '@/shared/config/colors';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Nav = () => {
  return (
    <nav className="flex items-center justify-between">
      <Hamburger />

      <Text className={`text-[${colors.accent}] font-bold`} size="xl">
        Vita.Chic
      </Text>

      <div className="flex-center gap-8">
        <Button type="icon">
          <FontAwesomeIcon icon={faShoppingBag} />
        </Button>
      </div>
    </nav>
  );
};

export default Nav;
