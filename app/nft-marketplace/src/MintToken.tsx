import { createMint, getOrCreateAssociatedTokenAccount, mintTo, setAuthority, transfer } 
 from "@solana/spl-token";
import { Connection, PublicKey, clusterApiUrl , Keypair, LAMPORTS_PER_SOL} from "@solana/web3.js";
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
GlowWalletAdapter,
LedgerWalletAdapter,
PhantomWalletAdapter,
SlopeWalletAdapter,
SolflareWalletAdapter,
SolletExtensionWalletAdapter,
SolletWalletAdapter,
//TorusWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { ConnectionProvider, WalletProvider , useConnection, useWallet} from '@solana/wallet-adapter-react';
import { WalletModalProvider , WalletMultiButton} from '@solana/wallet-adapter-react-ui';
import { useEffect, useState ,useMemo} from "react";
import { Buffer } from "buffer"; 
 

require('@solana/wallet-adapter-react-ui/styles.css');

window.Buffer = Buffer;
const network = clusterApiUrl("devnet");
const opts = {
preflightCommitment: "processed",
};


const  MintToken =()=>{
    const { connection } = useConnection();
    const { publicKey, sendTransaction ,wallet} = useWallet();
    const mintTokenCallBack=async ()=>{
        debugger;
        console.log('mint click');
       // const { connection } = useConnection();
        //const { publicKey, sendTransaction ,wallet,wallets} = useWallet();

       // const connection = new Connection(network, opts.preflightCommitment);
        // Generate a new wallet keypair and airdrop SOL
        const fromWallet = Keypair.generate();
        const fromAirdropSignature = await connection.requestAirdrop(
          fromWallet.publicKey,
          LAMPORTS_PER_SOL
        );
     
        // Wait for airdrop confirmation
        await connection.confirmTransaction(fromAirdropSignature);
     
        // Create a new token
        const mint = await createMint(
          connection,
          fromWallet,            // Payer of the transaction
          fromWallet.publicKey,  // Account that will control the minting
          null,                  // Account that will control the freezing of the token
          0                      // Location of the decimal place
        );
       
       console.log("Mint Token:",mint.toString());
        // Get the token account of the fromWallet Solana address. If it does not exist, create it.
        const fromTokenAccount = await getOrCreateAssociatedTokenAccount(
          connection,
          fromWallet,
          mint,
          fromWallet.publicKey
        );
        console.log("From Token Account:",fromWallet.publicKey.toString());
        // Generate a new wallet to receive the newly minted token
        const toWallet = new PublicKey("3jf8nStjaLcQQGm82YteCeNrWUG1PDh97jH5MCtV3yc6");//Keypair.generate();
     
        // Get the token account of the toWallet Solana address. If it does not exist, create it.
        const toTokenAccount = await getOrCreateAssociatedTokenAccount(
          connection,
          fromWallet,
          mint,  
       toWallet
          
        );
        console.log("To Token Account:",toWallet?.toBase58());
        // Minting 1 new token to the "fromTokenAccount" account we just returned/created.
        let signature = await mintTo(
          connection,
          fromWallet,               // Payer of the transaction fees
          mint,                     // Mint for the account
          fromTokenAccount.address, // Address of the account to mint to
          fromWallet.publicKey,     // Minting authority
          1                         // Amount to mint
        );
     
        await setAuthority(
          connection,
          fromWallet,            // Payer of the transaction fees
          mint,                  // Account
          fromWallet.publicKey,  // Current authority
          0,                     // Authority type: "0" represents Mint Tokens
          null                   // Setting the new Authority to null
        );
     
        signature = await transfer(
          connection,
          fromWallet,               // Payer of the transaction fees
          fromTokenAccount.address, // Source account
          toTokenAccount.address,   // Destination account
          fromWallet.publicKey,     // Owner of the source account
          1                         // Number of tokens to transfer
        );
         
    }
    return(
        <button className='mint-button' style={{"margin": "10px"}} type='button'
        onClick={mintTokenCallBack}>Mint Token </button>
    )

};
export default MintToken