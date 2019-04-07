
import HttpConnector from '../services/httpConnector';
import { loginUrl } from '../constants/resource-url';
const httpConnector = new HttpConnector();

const userService = {
  login,
  logout
};

function login(name, password) {
  return httpConnector.post(loginUrl, { name, password }, handleResponse);
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
    //location.reload(true);
  }
  return data.data;
}

export default userService;