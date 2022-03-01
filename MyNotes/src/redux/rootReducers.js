import {combineReducers} from 'redux';
import userReducer from '../redux/reducers';
import reduxSagaReducer from '../Core/Dashboard/reducer';
import authReducer from '../Core/Login/reducer';

const rootReducer = combineReducers({
  userReducer: userReducer,
  reduxSagaReducer: reduxSagaReducer,
  authReducer: authReducer,
});

export default rootReducer;
