import { Button, Text } from '@artimisjs/ui';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

type NewArrivalsHeaderProps = {
  handleScroll: (amount: number) => void;
};

const NewArrivalsHeader = ({ handleScroll }: NewArrivalsHeaderProps) => {
  const scrollRate = 1000;

  return (
    <div className="flex-center-between">
      <Text size="xxhuge">New Arrivals</Text>
      <div className="hidden md:flex-center gap-4">
        <Button buttonType="icon" onClick={() => handleScroll(-scrollRate)}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </Button>
        <Button buttonType="icon" onClick={() => handleScroll(scrollRate)}>
          <FontAwesomeIcon icon={faChevronRight} />
        </Button>

        <Button radius="full" size="xl">
          View All
        </Button>
      </div>
    </div>
  );
};

export default NewArrivalsHeader;
