import {combineReducers} from 'redux';
import userReducer from '../redux/reducers';
import reduxSagaReducer from '../Core/Dashboard/reducer';

const rootReducer = combineReducers({
  userReducer: userReducer,
  reduxSagaReducer: reduxSagaReducer,
});

export default rootReducer;
