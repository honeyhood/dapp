import React from 'react';
import ConnectComponent from './ConnectComponent';

const Navbar = () => {
  return (
    <div className="px-6 pt-6 lg:px-8">
    <nav className="flex h-9 items-center justify-between" aria-label="Global">
      <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
        <ConnectComponent/>
      </div>
    </nav>
    </div>
  );
}

export default Navbar;