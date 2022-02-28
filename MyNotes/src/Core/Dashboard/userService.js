const API_BASE_URL = 'https://reqres.in/';

export default class userService {
  static getUsers() {
    const uri = API_BASE_URL + 'api/users?page=1';
    return fetch(uri, {
      method: 'GET',
    });
  }
}
