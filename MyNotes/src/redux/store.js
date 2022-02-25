import {createStore, combineReducers} from 'redux';
import rootReducer from '../redux/index';

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
