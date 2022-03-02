import {put, takeEvery, call, takeLatest} from 'redux-saga/effects';
import {
  LOAD_USERS_ERROR,
  LOAD_USERS_LOADING,
  LOAD_USERS_SUCCESS,
} from '../Dashboard/action';
import Api from '../Dashboard/userService';

export default function* userSaga() {
  try {
    const users = yield call(Api.getUsers);
    yield put({type: LOAD_USERS_SUCCESS, data: users.data});
  } catch (err) {
    yield put({type: LOAD_USERS_ERROR, error: err.message});
  }
}
