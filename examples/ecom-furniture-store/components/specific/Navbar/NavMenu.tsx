import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const NavigationMenu = () => {
  return (
    <div className="lg:hidden">
      <FontAwesomeIcon icon={faBars} size="xl" />
    </div>
  );
};

export default NavigationMenu;
