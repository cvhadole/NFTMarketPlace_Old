import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';

const WalletButton = () => {
    const { connection } = useConnection();
    const { publicKey, sendTransaction ,wallet} = useWallet();
    
    return (
    	<div className='container'>   <WalletMultiButton />          
        </div>
    )
}

export default WalletButton