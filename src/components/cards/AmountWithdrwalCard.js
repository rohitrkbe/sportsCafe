import React, { useState, useEffect } from 'react';

export default (prop) =>{
    const [amountWithdrawn, setAmountWithdrawn] = useState(0);
    const [amountInProgress, setAmountInProgress] = useState(0);
    useEffect(()=>{
        let amountWithdrawnCount = 0;
        let amountInProgressCount = 0;
        for(let i=0; i<prop.withdrawals.length; i++){
            if ( prop.withdrawals[i].status === 'success' )
            amountWithdrawnCount = amountWithdrawnCount + prop.withdrawals[i].amount;
            else
            amountInProgressCount = amountInProgressCount + prop.withdrawals[i].amount;
        }
        setAmountWithdrawn(amountWithdrawnCount);
        setAmountInProgress(amountInProgressCount);
    },[]);
    return(
        <div className='amountiWithdrawalCard' >
            <img src={require('../../assets/images/withdrawal.png')} alt="Smiley face" height="40" width="40"  /> 
            <div className='amountWithdrawalText' >
                {
                    amountInProgress > 0 
                    ?   <p>&#8377;{amountInProgress} withdrawal in progress</p>
                    :   
                        <div>
                            <p>&#8377;{amountWithdrawn}</p>
                            <p>withdrawn from your winnings</p>
                        </div>
                }
            </div>
        </div>
    )
};