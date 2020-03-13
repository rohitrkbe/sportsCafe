import React, { useState, useEffect } from 'react';

export default (prop) =>{
    const [withdrawlsInProgressCount, setWithdrawlInProgressCount] = useState(0);
    useEffect(()=>{
        let count = 0;
        for(let i=0; i<prop.withdrawals.length; i++){
            if ( prop.withdrawals[i].status !== 'success' )
            count++
        }
        setWithdrawlInProgressCount(count);
    },[]);
    return(
        <div className='transactionTotalCard' >
            <h4>TOTAL BALANCE &#8377;{prop.walletAmount}</h4>
            <h5>{withdrawlsInProgressCount} withdrawls in progress</h5>
        </div>
    )
};