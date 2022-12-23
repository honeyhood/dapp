import Navbar from '../components/Navbar';
import { React, useEffect, useState, useContext } from 'react'
import { client, challenge, authenticate } from '../api'
import { useAccount } from 'wagmi';
import { AuthenticationContext } from '../contexts/authentication';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const ConnectComponent = () => {
  const { address, connector } = useAccount();
  const [signer, setSigner] = useState();
  const { authentication, setAuthentication } = useContext(AuthenticationContext);

  useEffect(() => {
    if (address) {
      connectSigner();
    }
  }, [address])

  const connectSigner = async () => {
    let signer = await connector.getSigner();
    setSigner(signer);
  }

  async function login() {
    try {
      /* first request the challenge from the API server */
      const challengeInfo = await client.query({
        query: challenge,
        variables: { address }
      })
      /* ask the user to sign a message with the challenge info returned from the server */
      const signature = await signer.signMessage(challengeInfo.data.challenge.text)
      /* authenticate the user */
      const authData = await client.mutate({
        mutation: authenticate,
        variables: {
          address, signature
        }
      })
      /* if user authentication is successful, you will receive an accessToken and refreshToken */
      const { data: { authenticate: { accessToken }}} = authData
      console.log({ accessToken })
      setAuthentication(accessToken)
    } catch (err) {
      console.log('Error signing in: ', err)
    }
  }

  return (
    <>
      { /* if the user has connected their wallet but has not yet authenticated, show them a login button */ }
      {
        !address && (
          <ConnectButton />
        )
      }
      {
        address && !authentication && (
          <div onClick={login}>
            <button>Login</button>
          </div>
        )
      }
      { /* once the user has authenticated, show them a success message */ }
      {
        address && authentication && <h2>Successfully signed in!</h2>
      }
    </>
  );
}

export default ConnectComponent;