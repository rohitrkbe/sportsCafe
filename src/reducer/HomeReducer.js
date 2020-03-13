import contestDataJSON from '../data/contestData.json';
import homeDataJSON from '../data/homeData.json';
import walletDataJSON from '../data/walletData.json';
import { SET_DATA_FROM_JSON } from '../actions/ActionConstant';
  
const initialState = {
    contestData: {},
    walletData: {},
    homeData: {},
};
  
export default (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA_FROM_JSON:
            return {
                ...state,
                homeData: homeDataJSON,
                contestData: contestDataJSON,
                walletData: walletDataJSON,
            };
        default:
            return state;
    }
};