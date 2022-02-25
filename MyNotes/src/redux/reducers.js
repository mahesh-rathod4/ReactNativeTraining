const initialState = {
  id: '',
  email: '',
  firstName: '',
  lastName: '',
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'SAVE_EMPLOYEE_DETAIL':
      return {...state, user: action.user};
    default:
      return state;
  }
}

export default userReducer;
