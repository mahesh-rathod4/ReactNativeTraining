import axios from 'axios';
const API_BASE_URL = 'https://reqres.in/';

export default class userService {
  static getUsers() {
    const uri = API_BASE_URL + 'api/users?page=1';
    return fetch(uri, {
      method: 'GET',
    });
  }

  static loginUser(email, password) {
    const url = API_BASE_URL + 'api/login';
    const parameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email: email, password: password}),
    };

    return fetch(url, {
      parameters,
    }).then(response => response.json());
  }
}
