use anchor_lang::prelude::*;

declare_id!("Czeat7H7g7vBuWoXab4ySDfKQDRd6bVRUtQQBtb1FRSm");

#[program]
pub mod pacific_ocean_nft {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
