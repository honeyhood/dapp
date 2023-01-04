import React, { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';
import { AuthenticationContext } from '../contexts/authentication';
import { useContext } from 'react';
import { getDefaultProfile,client } from '../api';
import Following from './Followings';

const Hero = () => {
  const { authentication, setAuthentication } = useContext(AuthenticationContext);
  const { address, connector } = useAccount();
  const [lenshandle,setlenshandle]=useState();

  async function getlenshandle() {
    try{
      const response = await client.query({
        query: getDefaultProfile,
        variables: { 
        request:{ 
          ethereumAddress:address
        }  
        }
      })
      console.log(response)
      if(response)
      {
        setlenshandle(response.data.defaultProfile.handle)
      }
    }
    catch(err){
      console.log(err);
    }
  }
  useEffect(()=>{
    if(address && authentication){
      getlenshandle();
    }
  })

  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: 'url(/heroImg.jpeg)' }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>

          <>
      <button className="btn btn-primary">Get Started</button>


      { /* if the user has connected their wallet but has not yet authenticated, show them a login button */ }
      {
        !address && (
          <h1 className="mb-5 text-5xl font-bold">connect your wallet</h1>
        )
      }

      {   /* if user has connected wallet and has not yet authenticated*/ }
     
        { 
        address && !authentication && (
          <h1 className="mb-5 text-5xl font-bold" >Please authenticate by signing message</h1>
        )
      }

      { /* once the user has authenticated, show them thier lens handle or tell them to get a lens handle */ }
      {
        address && authentication && (
          lenshandle?(
          <div>
          <h1>{`Your lens handle: ${lenshandle}`}</h1>
          </div>
          ):(
            <div >
            <button className="mb-5 text-5xl font-bold">get lens</button>
          </div>
          )
        )
      }
    </>
        </div>
      </div>
    </div>
  );
};

export default Hero;
