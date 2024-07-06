import React from 'react';

const Hamburger = () => {
  return (
    <div className="flex items-start justify-center flex-col gap-1 scale-y-75">
      <div className={`h-[4px] w-[50px] bg-black`} />
      <div className={`h-[4px] w-[35px] bg-black`} />
      <div className={`h-[4px] w-[50px] bg-black`} />
    </div>
  );
};

export default Hamburger;
