import React from 'react';
import { connect } from 'react-redux';
import './index.css';
import * as AD from '../../actions';
import TopHeader from '../../components/header/TopHeader';
import { Badge } from 'reactstrap';
import StickyHeaderContest from '../../components/header/StickyHeaderContest';
import ContestCard from '../../components/cards/ContestCard';

class Contest extends React.Component {
	constructor(props){
		super(props);
		this.state={
            selectedTab : 'all',
            filteredList: [],
        };
	}

	componentDidMount(){
        this.props.setDataFromJson();
    }
    
    handleTabClick = item => {
        if ( item !== 'all' ){
            let tempArray=[...this.props.contestData.contests];
            let newList = [];
            for(let i=0; i<tempArray.length; i++){
                if ( tempArray[i].contest_type === item ){
                    newList.push(tempArray[i]);
                }
            }
            this.setState({ filteredList: newList })
        }
        this.setState({ selectedTab: item })
    }

  render(){
    const { selectedTab, filteredList } = this.state; 
    const { contestData } = this.props; 
    return (
		<div className='Flex1' >
			<TopHeader text='Contest' />
            {
                contestData && contestData.contests &&
                <StickyHeaderContest items={contestData.contests} selectedTab={selectedTab} onClick={(item)=>{ this.handleTabClick(item) }} />
            }
            <div className='contestBody'>
                <div className='contestTopDetail' >
                    <div>
                        <p>All Contest</p>
                        <p>Different types of contest in one place</p>
                    </div>
                    <div>
                        <Badge color="primary" pill>Contest Info</Badge>
                    </div>
                </div>
                {
                    contestData && contestData.contests &&
                    <div className='contestListBlock' >
                        <ContestCard items={ selectedTab === 'all' ? contestData.contests : filteredList } />
                    </div>
                }
            </div>
		</div>
    );
  }
}

const mapStateToProps = state => {
  const { homeData, contestData  } = state.HomeReducer;
  return {
    homeData, contestData
  }
}

const mapDispatchToProps = dispatch => ({
	setDataFromJson: () => dispatch(AD.setDataFromJson()),
})

export default connect( mapStateToProps, mapDispatchToProps )(Contest);