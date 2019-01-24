import config from 'config';
import HttpConnector from '../services/httpConnector';
import { authUrl, loginUrl } from '../constants/resource-url';
import history from './history';

const httpConnector = new HttpConnector();


export const userService = {
  login,
  logout
};

function login(name, password) {
  return httpConnector.post(loginUrl, { name, password }, handleResponse)
    .then((user) => {
      // login successful if there's a jwt token in the response
      if (user.token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user));
        history.push('/categories');
      }
      return user;
    });
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
}

// function getAll() {
//   const requestOptions = {
//     method: 'GET',
//     headers: authHeader()
//   };

//   return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
// }

function handleResponse(response) {
  const data = response;
  if (response.status === 401) {
    // auto logout if 401 response returned from api
    logout();
    location.reload(true);
  }
  return data.data;
}