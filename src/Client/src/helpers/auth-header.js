export function authHeader() {
  // return authorization header with jwt token
  let user = null;
  try {
     user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
  }
  catch (error) {
  }

  if (user && user.token) {
    return { 'Authorization': 'Bearer ' + user.token };
  } else {
    return {};
  }
}