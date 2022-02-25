import {combineReducers} from 'redux';
import userReducer from '../redux/reducers';

const rootReducer = combineReducers({
  userReducer: userReducer,
});

export default rootReducer;
