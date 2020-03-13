import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default (prop) =>{
    console.log('props', prop)
    return(
        <div>
            <Container>
                <Row className='flexCenter' >
                    {
                        prop.withdrawals.map( (item, index) => {
                            let text = 'Amount Withdrawn Successfully';
                            if(item.status !== 'success'){
                                text='Amount Withdrawn Failed';
                            }
                            return(
                                <Col xs="6" sm="6" className='withdrawalCard'>
                                    <div className='' >
                                        <div className='amountDetails' >
                                            <p>&#8377;{item.amount}</p>
                                            <img src={require('../../assets/images/add money-min.png')} height="30" width="30"/> 
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