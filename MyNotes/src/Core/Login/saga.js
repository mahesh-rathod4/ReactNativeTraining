import Api from '../Dashboard/userService';
import authService from '../Dashboard/userService';

import {put, call, takeLatest} from 'redux-saga/effects';
import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
} from '../Login/actions';

function* loginUser(action) {
  try {
    const params = action.user;
    const response = yield call(Api.loginUser, params.email, params.password);
    const data = response.data;
    yield put({type: LOGIN_USER_SUCCESS, data});
  } catch (error) {
    console.log(error.message);
    yield put({type: LOGIN_USER_ERROR, error: error.message});
  }
}

export default function* loginScreenSaga() {
  yield takeLatest('LOGIN_USER', loginUser);
}
