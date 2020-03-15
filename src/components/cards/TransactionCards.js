import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default (prop) =>{
    console.log('props', prop)
    return(
        <div>
            <Container>
                <Row className='flexCenter' >
                    {
                        prop.transactions.map( (item, index) => {
                            let text = '';
                            if(item.type === 'add_to_wallet' && item.status === 'success'){
                                text='Add Money Successfully';
                            }else if(item.type === 'add_to_wallet' && item.status !== 'success'){
                                text='Add Money Failed';
                            }else if(item.type === 'remove_from_wallet' && item.status === 'success'){
                                text='Paid From Wallet success';
                            }else if(item.type === 'remove_from_wallet' && item.status !== 'success'){
                                text='paid from wallet failed';
                            }
                            return(
                                <Col xs="4" sm="4" key={'transactionList'+index} className='transactionCard'>
                                    <div className='' >
                                        <div className='amountDetails' >
                                            <p>&#8377;{item.amount}</p>
                                            <img alt='abc' src={require('../../assets/images/add money-min.png')} height="30" width="30"/> 
                                        </div>
                                            <p>{text}</p>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    )
};