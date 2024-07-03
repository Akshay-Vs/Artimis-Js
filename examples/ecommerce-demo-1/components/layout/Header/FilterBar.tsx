import { Input } from '@/components/common';
import { Button, DropDown } from '@artimisjs/ui';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import React from 'react';

const FilterBar = () => {
  const buttons = [
    {
      text: 'Men',
      target: '#',
    },
    {
      text: 'Women',
      target: '#',
    },
    {
      text: 'Kids',
      target: '#',
    },
    {
      text: 'Premium',
      target: '#',
    },
  ];
  return (
    <div className="hidden md:flex-center-start gap-8">
      <DropDown
        className="w-[18vw]"
        options={['Hello World', 'Hello World']}
        title={'Categories'}
      />

      <DropDown
        className="w-[14vw]"
        options={['Hello World', 'Hello World']}
        title={'Filter By'}
      />

      <Input
        type="text"
        placeholder="Search"
        containerClassName="w-[30vw]"
        icon={faSearch}
      />

      <div className="flex-center-between gap-4">
        {buttons.map((button) => (
          <Link href={button.target} key={button.text}>
            <Button size="xl" radius="full">
              {button.text}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
