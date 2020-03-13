import { combineReducers } from 'redux';
import HomeReducer from './HomeReducer';

const appReducer =  combineReducers({
    HomeReducer,
});

const rootReducer = (state, action) => {

  return appReducer(state, action);
};

export default rootReducer;