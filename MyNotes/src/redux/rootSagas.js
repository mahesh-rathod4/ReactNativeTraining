import {all} from 'redux-saga/effects';
import loginScreenSaga from '../Core/Login/saga';
import userSaga from '../Core/Dashboard/userSaga';

function* rootSaga() {
  yield all([loginScreenSaga(), userSaga]);
}

export default rootSaga;
