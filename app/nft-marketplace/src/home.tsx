import React from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import WalletButton from './wallet-button';
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton
} from "@solana/wallet-adapter-react-ui";

import Header from './Header'
const Home = () => {
    const { connection } = useConnection();
    const { publicKey, sendTransaction ,wallet} = useWallet();
    return (
      // <div>
          
      //     <>
      //     { 
      //       wallet?.adapter.connected ? <><h1>{wallet.adapter.name + ' connected'} </h1> <WalletDisconnectButton /></>: <WalletButton />
      //     }
      //     </> 
         
      // </div>
      <div className="container mx-auto max-w-6xl p-8 2xl:px-0">
        <div className="flex flex-col items-center">
         <Header />
         {/* <Home/> */}
        
        </div>
        </div> 
    )
  };
  
  export default Home;