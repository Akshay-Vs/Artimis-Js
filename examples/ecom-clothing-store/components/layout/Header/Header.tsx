import React from 'react';
import Nav from './Nav';
import FilterBar from './FilterBar';

const Header = () => {
  return (
    <header className="pt-4 px-4 md:px-12 gap-4 flex flex-col z-50">
      <Nav />
      <FilterBar />
    </header>
  );
};

export default Header;
