/*
import React, { FunctionComponent, useEffect, useState } from "react";

import { RouteInfo, TransactionFeeInfo } from "@jup-ag/react-hook";

const FeeInfo: FunctionComponent<{ route: RouteInfo }> = ({ route }: { route: RouteInfo }) => {
    const [state, setState] = useState<TransactionFeeInfo>();
    useEffect(() => {
        setState(undefined);
        route.getDepositAndFee().then(setState);
    }, [route]);
    return (
        <div>
            {state && (
                <div>
                    <br />
                    Deposit For serum:  
                    {state.openOrdersDeposits.reduce((total, i) => total + i, 0) /
                        10 ** 9}{" "}
                    SOL
                    <br />
                    Deposit For ATA:  
                    {state.ataDeposits[0] / 10 ** 9} SOL
                    <br />
                    Fee:  
                    {state.signatureFee / 10 ** 9} SOL
                    <br />
                </div>
            )}
        </div>
    );
};

export default FeeInfo
*/
const FeeInfo =()=>{

}
export default FeeInfo
