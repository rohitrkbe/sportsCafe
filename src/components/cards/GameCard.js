import React, { useState, useEffect } from 'react';
import TimeLabel from '../timer/Time';

export default (prop) =>{
    if( prop.items.length === 0 )
    return(
        <div>No data found</div>
    )
    return(
        <div>
            {
                prop.items.map((item,index)=>{
                    return(
                        <div key={'gameListCard'+index} className='gameCard' >
                            <div>
                                Picks
                            </div>
                            <div className='matchDetailBlock' >
                                <img src={item.match_parties[0].party_img_url} height="40" width="40"/> 
                                <div style={{textAlign:'center'}} >
                                    {item.challenge_name} <br/>
                                    {item.desc} {item.game_mode}
                                </div>
                                <img src={item.match_parties[1].party_img_url} height="40" width="40"/> 
                            </div>
                            <div className='priceTimeBlock'>
                                <div>
                                    <img src={require('../../assets/images/ruppe-min.png')} height="20" width="20"/> 
                                    {item.prize_money}
                                </div>
                                <div  >
                                    <img src={require('../../assets/images/timer-min.png')} height="20" width="20"/>
                                    {
                                        <TimeLabel time={item.start_time} />
                                    }
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
                
};