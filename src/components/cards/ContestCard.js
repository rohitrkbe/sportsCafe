import React, { useState, useEffect } from 'react';
import { Badge } from 'reactstrap';

export default (prop) =>{
    if( prop.items.length === 0 )
    return(
        <div>No data found</div>
    )
    return(
        <div>
            {
                prop.items.map((item, index)=>{
                    return(
                        <div key={'contestCard'+index} className='contestCard' >
                            <div className='contestCardTopSection' >
                                <div>
                                    {item.name} <br/>
                                    {item.max_participants} Members. Top {item.max_winners} win
                                </div>
                                <div className='contestCardTopSectionType'>
                                    <div className='ScoreDiv' >{item.score_type}</div>
                                    <div className='PayoutDiv' >{item.payout_type}</div>
                                </div>
                            </div>
                            <div className='contestCardMiddleSection'>
                                <div>
                                    PRIZES <br/>
                                    {item.prizes}
                                </div>
                                <div>
                                    ENTRY FEE <br/>
                                    {item.fee}
                                </div>
                                <div>
                                    <Badge color="success" pill>JOIN</Badge> 
                                </div>
                            </div>
                            <div className='contestCardBottomSection' >
                               {item.filled_rooms} Rooms filled. {item.filling_rooms} Filling
                            </div>
                        </div>
                    )
                })
            }
            
        </div>
    )
                
};