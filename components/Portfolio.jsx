import React, { useContext, useEffect, useState } from 'react';
import { useAccount } from 'wagmi';
import { AuthenticationContext } from '../contexts/authentication';

const Portfolio = () => {
  const { authentication, setAuthentication } = useContext(AuthenticationContext);
  const [transactions, setTransactions] = useState([]);
  const { address } = useAccount();
  const [ feed, setFeed ] = useState();

  useEffect(() => {
    if (address) {
      console.log(address)
      fetchTransactions();
    }
  }, []);


  const fetchTransactions = async () => {
    const response = await fetch(`https://api.covalenthq.com/v1/137/address/${address}/transactions_v2/?key=ckey_7b0063c2f9d54bffa27dcc3abed`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(data.data)
    setTransactions(data.data.items);
  };

  return (
    <div className='text-black' style={{
      overflow: 'initial'
    }}>
      {
        authentication && transactions.length != 0 &&
        (
          <div className="hero min-h-screen">
            <h1 className="mb-5 text-5xl font-bold">
              Your Transactions
            </h1>
            <p className="mb-5">
              Here are your transactions on Polygon
            </p>

            <div className="grid grid-cols-1 gap-6">
              {
                transactions.map((transaction) => {
                  return (
                    <div className="card">
                      <div className="card-body">
                        <h1 className='card-title'>Block: {transaction.block_height}</h1>
                        <p className="card-subtitle">To: {transaction.to_address}</p>
                        <p className="card-text">Hash: {transaction.tx_hash}</p>
                        <a href={`https://polygonscan.com/tx/${transaction.tx_hash}`} target="_blank" rel="noopener noreferrer">See in Explorer</a>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        )
      }
    </div>
  );
}

export default Portfolio;