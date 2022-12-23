import React from 'react';

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Crypto twitter's new home</h1>
          <p className="py-6">
            Discuss on-chain data, follow wallet trades and investments with
            your friends and communities
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
