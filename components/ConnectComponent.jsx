<<<<<<< HEAD
import { React, useEffect, useState, useContext } from 'react';
import { apolloClient, challenge, authenticate } from '../api';
=======
import { React, useEffect, useState, useContext } from 'react'
import { apolloClient, challenge, authenticate } from '../api'
>>>>>>> 276f0dbf73e812f690ad43a4869465281de8c0b7
import { useAccount, useNetwork } from 'wagmi';
import { AuthenticationContext } from '../contexts/authentication';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import getLensHandle from '../helpers/get-lens-handle';
import { createProfile } from '../helpers/create-testnet-profile';
import { getAuthenticationToken, setAuthenticationToken } from '../state';
import { profiles } from '../helpers/get-lens-profiles';

const ConnectComponent = () => {
  const { address, connector } = useAccount();
  const { chain } = useNetwork();
  const [signer, setSigner] = useState();
<<<<<<< HEAD
  const { authentication, setAuthentication } = useContext(
    AuthenticationContext
  );
  const [lensHandle, setLensHandle] = useState(null);
=======
  const { authentication, setAuthentication } = useContext(AuthenticationContext);
  const [ lensHandle, setLensHandle ] = useState(null);
>>>>>>> 276f0dbf73e812f690ad43a4869465281de8c0b7

  useEffect(() => {
    if (address) {
      connectSigner();
    }
  }, [address]);

  const connectSigner = async () => {
    let signer = await connector.getSigner();
    setSigner(signer);
  };

  async function login() {
    try {
      /* first request the challenge from the API server */
      const challengeInfo = await apolloClient.query({
        query: challenge,
        variables: { address },
      });
      /* ask the user to sign a message with the challenge info returned from the server */
      const signature = await signer.signMessage(
        challengeInfo.data.challenge.text
      );
      /* authenticate the user */
      const authData = await apolloClient.mutate({
        mutation: authenticate,
        variables: {
          address,
          signature,
        },
      });
      /* if user authentication is successful, you will receive an accessToken and refreshToken */
<<<<<<< HEAD
      const {
        data: {
          authenticate: { accessToken },
        },
      } = authData;
      console.log({ accessToken });
      setAuthentication(accessToken);
=======
      const { data: { authenticate: { accessToken }}} = authData
      console.log({ accessToken })
      setAuthentication(accessToken)
>>>>>>> 276f0dbf73e812f690ad43a4869465281de8c0b7
      setAuthenticationToken(accessToken);

      /* get the lens handle */
      const lensHandle = await getLensHandle(address);
<<<<<<< HEAD
      if (lensHandle) setLensHandle(lensHandle);

      const addressProfiles = await profiles(address);
      if (
        !lensHandle &&
        addressProfiles.items &&
        addressProfiles.items.length > 0
      )
=======
      if (lensHandle)
        setLensHandle(lensHandle);
      
      const addressProfiles = await profiles(address);
      if (!lensHandle && addressProfiles.items && addressProfiles.items.length > 0)
>>>>>>> 276f0dbf73e812f690ad43a4869465281de8c0b7
        setLensHandle(addressProfiles.items[0].handle);
    } catch (err) {
      console.log('Error signing in: ', err);
    }
  }

  async function create() {
    try {
      await createProfile(address, authentication);
    } catch (err) {
      console.log('Error creating profile: ', err);
    }
  }

  async function create() {
    try {
      await createProfile(address, authentication); 
      const addressProfiles = await profiles(address);
      if (!lensHandle && addressProfiles.items && addressProfiles.items.length > 0)
        setLensHandle(addressProfiles.items[0].handle);
    } catch (err) {
      console.log('Error creating profile: ', err)
    }
  }

  return (
<<<<<<< HEAD
    <>
      {/* if the user has connected their wallet but has not yet authenticated, show them a login button */}
      {!address && <ConnectButton />}
      {address && !authentication && (
        <div onClick={login}>
          <button>Login</button>
        </div>
      )}
      {/* once the user has authenticated, show them a success message */}
      {address && authentication && lensHandle && <h2>{lensHandle}</h2>}
      {address && authentication && !lensHandle && chain.id === 80001 && (
        <div onClick={create}>
          <button>Create Lens Profile</button>
        </div>
      )}
      {address && authentication && !lensHandle && chain.id !== 80001 && (
        <h2>Claim lens profile</h2>
      )}
    </>
=======
    <div>
      { /* if the user has connected their wallet but has not yet authenticated, show them a login button */ }
      {
        !address && (
          <ConnectButton />
        )
      }
      {
        address && !authentication && (
          <div onClick={login}>
            <a href='#' style={{
              color: 'white',
            }} className='inline-block rounded-lg bg-violet-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-violet-600 hover:bg-violet-700 hover:ring-violet-700'>Login</a>
          </div>
        )
      }
      { /* once the user has authenticated, show them a success message */ }
      {
        address && authentication && lensHandle && <a href='#' style={{
          color: 'white',
        }}  className='inline-block rounded-lg bg-violet-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-violet-600 hover:bg-violet-700 hover:ring-violet-700'>{lensHandle}</a>
      }
      {
        address && authentication && !lensHandle && chain.id === 80001 && (
          <div onClick={create}>
            <a href='#' style={{
              color: 'white',
            }}  className='inline-block rounded-lg bg-violet-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-violet-600 hover:bg-violet-700 hover:ring-violet-700'>Create Lens Profile</a>
          </div>
        )
      }
      {
        address && authentication && !lensHandle && chain.id !== 80001 && <h2>Claim lens profile</h2>
      }
    </div>
>>>>>>> 276f0dbf73e812f690ad43a4869465281de8c0b7
  );
};

export default ConnectComponent;
