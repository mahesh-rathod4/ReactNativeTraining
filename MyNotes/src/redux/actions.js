export default function saveUserDetails(user) {
  return {
    type: 'SAVE_EMPLOYEE_DETAIL',
    user: {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
    },
  };
}
