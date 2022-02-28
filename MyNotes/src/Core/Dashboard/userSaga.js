import {put, takeEvery, takeLatest} from 'redux-saga/effects';
import {
  loadUsersSuccess,
  LOAD_USERS_ERROR,
  LOAD_USERS_LOADING,
  LOAD_USERS_SUCCESS,
} from '../Dashboard/action';
import Api from '../Dashboard/userService';

async function fetchAsync(func) {
  const response = await func();
  if (response.ok) {
    return await response.json();
  }
  throw new Error('Unexpected error!!!');
}

function* fetchUsers() {
  try {
    const users = yield fetchAsync(Api.getUsers);
    yield put({type: LOAD_USERS_SUCCESS, data: users});
  } catch (err) {
    yield put({type: LOAD_USERS_ERROR, error: err.message});
  }
}

export function* userSaga() {
  // yield takeEvery(LOAD_USERS_LOADING, fetchUsers);
  try {
    const users = yield fetchAsync(Api.getUsers);
    yield put({type: LOAD_USERS_SUCCESS, data: users.data});
  } catch (err) {
    yield put({type: LOAD_USERS_ERROR, error: err.message});
  }
}

export default userSaga;
