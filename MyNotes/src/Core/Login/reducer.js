import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
} from '../Login/actions';

const initialState = {
  user: [],
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return {...state, user: action.data};
    case LOGIN_USER_ERROR:
      return {...state, user: action.user};
    default:
      return state;
  }
}
