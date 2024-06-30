import { colors } from '@config/colors';
import React from 'react';

const Hamburger = () => {
  return (
    <div className="flex items-start justify-center flex-col gap-1 scale-y-75">
      <div className={`h-[4px] w-[50px] bg-[${colors.accent}]`} />
      <div className={`h-[4px] w-[35px] bg-[${colors.accent}]`} />
      <div className={`h-[4px] w-[50px] bg-[${colors.accent}]`} />
    </div>
  );
};

export default Hamburger;
