import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { PacificOceanNft } from "../target/types/pacific_ocean_nft";

describe("PacificOceanNFT", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.PacificOceanNft as Program<PacificOceanNft>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
