import { WalletMultiButton ,WalletDisconnectButton} from '@solana/wallet-adapter-react-ui'

import { useWallet } from '@solana/wallet-adapter-react';
import React from 'react'

import SiteDescription from './SiteDescription';
import MintToken from './MintToken';
const Header = () => {
    const { publicKey, sendTransaction ,wallet} = useWallet();
    return (
        <div className="navbar w-full mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
             
            <div className="flex-none">
                 
                <>
          {
            //   wallet?.adapter.connected ? <h1>connected</h1> : <h1>test connected</h1> // <WalletButton />
            wallet?.adapter.connected ? <><h1>{wallet.adapter.name + ' wallet connected'} </h1> 
              <WalletDisconnectButton />
              <MintToken />
              
              <button className='mint-button' style={{"margin": "10px"}} type='button'>Mint NFT </button>
              <SiteDescription />
             
              </>: <WalletMultiButton />
          }
          </> 
            </div>
        </div>
    )
}

export default Header