// export const loginUserService = request => {
//   const LOGIN_API_ENDPOINT = 'https://reqres.in/login';

//   const parameters = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(request.user),
//   };

//   return fetch(LOGIN_API_ENDPOINT, parameters)
//     .then(response => {
//       return response.json();
//     })
//     .then(json => {
//       return json;
//     });
// };

export const userLogin = async user => {
  const response = await fetch('https://reqres.in/'.login, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: user.email,
      password: user.password,
      returnSecureToken: true,
    }),
  });

  if (!response.ok) {
    throw new Error('Something Went Wrong!!');
  }

  const responseData = await response.json();
  console.log(responseData);
  return responseData.email;
};
