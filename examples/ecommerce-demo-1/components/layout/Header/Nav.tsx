import { Hamburger } from '@/components/common';
import { colors } from '@/shared/config/colors';
import { Button, Row, Text } from '@artimisjs/ui';
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

      <Row className="flex-center gap-8">
        <Button buttonType="icon">
          <FontAwesomeIcon icon={faShoppingBag} />
        </Button>
      </Row>
    </nav>
  );
};

export default Nav;
