import React from 'react';
import { connect } from 'react-redux';
import './home.css';
import * as AD from '../../actions';
import TopHeader from '../../components/header/TopHeader';
import { Redirect } from 'react-router-dom';
import CustomCarousal from '../../components/carousal/HomeCarousal';
import GameCard from '../../components/cards/GameCard';
import StickyHeaderHome from '../../components/header/StickyHeaderHome';

class Home extends React.Component {
	constructor(props){
		super(props);
		this.state={
			redirectScreen: false,
			screenName:'',
			selectedSportTab: 0,
			filteredList:[]
		};	
	}

	componentDidMount(){
		this.props.setDataFromJson();
	}

	handleBannerClick = ( item ) => {
		if ( item && item.redirect  ){
			switch (item.route)
			{
				case "/wallet":
					this.setState({ screenName: '/Transaction' });
					break;
				case "/contest":
					this.setState({ screenName: '/Contest' });
					break;
				default: 
					this.setState({ screenName: '/' });
			}
			this.setState({ redirectScreen: true })
		}
	}

	handleSportListClick = ( id ) =>{
		if ( id != 0 ){
			let tempArray=[...this.props.homeData.challenges];
            let newList = [];
            for(let i=0; i<tempArray.length; i++){
                if ( tempArray[i].sports_id === id ){
                    newList.push(tempArray[i]);
                }
			}
            this.setState({ filteredList: newList })
		}
		this.setState({ selectedSportTab: id });
	}

  render(){
	const { redirectScreen, screenName, selectedSportTab, filteredList }= this.state;
	const { homeData }= this.props;
	if( redirectScreen ){
		return(
			<Redirect to={ screenName } />
		)
	}
    return (
		<div className='Flex1' >
			<TopHeader text='Home' />
			{
				homeData && homeData.banners &&
				<div className='carousalDiv' >
					<CustomCarousal items={homeData.banners} onClick={ (item) => { this.handleBannerClick(item) }} />
				</div>
			}
			{
				homeData && homeData.sports &&
				<StickyHeaderHome items={homeData.sports} from='home' onClick={(id)=>{this.handleSportListClick(id)}} selectedTab={selectedSportTab} />
			}
			{
				homeData && homeData.challenges &&
				<div>
					{ selectedSportTab == 0 && <p>All Games ({homeData.challenges.length})</p>}
					<GameCard items={ selectedSportTab == 0 ? homeData.challenges : filteredList } />
				</div>
			}
			
		</div>
    );
  }
}

const mapStateToProps = state => {
  const { homeData  } = state.HomeReducer;
  return {
    homeData
  }
}

const mapDispatchToProps = dispatch => ({
	setDataFromJson: () => dispatch(AD.setDataFromJson()),
})

export default connect( mapStateToProps, mapDispatchToProps )(Home)