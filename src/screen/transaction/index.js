import React from 'react';
import { connect } from 'react-redux';
import './index.css';
import * as AD from '../../actions';
import TopHeader from '../../components/header/TopHeader';
import Label from '../../components/textLabel/ptext';
import TransactionTotalCard from '../../components/cards/TransactionTotalCard';
import AmountWithdrwalCard from '../../components/cards/AmountWithdrwalCard';
import TransactionCards from '../../components/cards/TransactionCards';
import WithdrawlCard from '../../components/cards/WithdrawlCard';

class Transaction extends React.Component {
	constructor(props){
		super(props);
		this.state={

		};
	}

	componentDidMount(){
        this.props.setDataFromJson();
	}

  render(){
      const { homeData, walletData } = this.props; 
    return (
		<div className='Flex1' >
			<TopHeader text='Transactions' />
            <div className='transactionBody'>
                <Label className='transactionLabel' text={homeData.user_name} />
                {
                    walletData && walletData.wallet_balance &&
                    <div>
                        <TransactionTotalCard walletAmount={walletData.wallet_balance} withdrawals={walletData.withdrawals} />
                        <AmountWithdrwalCard walletAmount={walletData.wallet_balance} withdrawals={walletData.withdrawals} />
                    </div>
                }
                {
                    walletData && walletData.transactions &&
                    <TransactionCards transactions={walletData.transactions} />
                    
                }
                {
                    walletData && walletData.withdrawals &&
                    <WithdrawlCard withdrawals={walletData.withdrawals} />
                    
                }
            </div>
		</div>
    );
  }
}

const mapStateToProps = state => {
  const { homeData, walletData  } = state.HomeReducer;
  return {
    homeData, walletData
  }
}

const mapDispatchToProps = dispatch => ({
	setDataFromJson: () => dispatch(AD.setDataFromJson()),
})

export default connect( mapStateToProps, mapDispatchToProps )(Transaction);