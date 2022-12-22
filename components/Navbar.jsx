import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Navbar = () => {
  return (
    <div className="navbar flex bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">WIRED</a>
      </div>
      <ConnectButton />
    </div>
  );
};

export default Navbar;
