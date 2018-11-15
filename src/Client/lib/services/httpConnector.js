import axios from 'axios';
import { authHeader } from '../helpers/auth-header';

export default class HttpConnector {
  constructor() {
    this.host = 'http://esaving.com';
    this.get = this.get.bind(this);
  }

  get = function (url, handleFunc, errorHandleFunc) {
    const host = this.host;
    return new Promise((resolve, reject) => {
      const getUrl = `${host}${url}`;
      var headers = authHeader();
      axios.get(getUrl, {headers}).then(function (result) {
        let resultData = {};
        if (handleFunc && typeof handleFunc === 'function') {
          resultData = handleFunc(result);
        } else {
          resultData = this.handleData(result);
        }
        resolve(resultData);
      }.bind(this)).catch((error) => {
        if (errorHandleFunc && typeof errorHandleFunc === 'function') {
          error = errorHandleFunc(error);
        }
        
        reject(error);
      });
    });
  }

  post = function (url, data, handleFunc, errorHandleFunc) {
    const host = this.host;
    return new Promise(function (resolve, reject) {
      const postUrl = `${host}${url}`;
      var headers = authHeader();
      axios({
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          ...headers
        },
        url: postUrl,
        data,
      }).then((result) => {
        let resultData = {};
        if (handleFunc && typeof handleFunc === 'function') {
          resultData = handleFunc(result);
        } else {
          resultData = this.handleData(result);
        }
        resolve(resultData);
      }).catch((error) => {
        if (errorHandleFunc && typeof errorHandleFunc === 'function') {
          error = errorHandleFunc(error);
        }
        reject(error);
      });
    });
  }

  delete = function (url, id, handleFunc, errorHandleFunc) {
    const host = this.host;
    return new Promise(function (resolve, reject) {
      const deleteUrl = `${host}${url}/${id}`;
      var headers = authHeader();
      axios.delete(deleteUrl, {headers}).then((result) => {
        let resultData = result.data;
        if (handleFunc && typeof handleFunc === 'function') {
          resultData = handleFunc(resultData);
        }
        resolve(resultData);
      }).catch((error) => {
        if (errorHandleFunc && typeof errorHandleFunc === 'function') {
          error = errorHandleFunc(error);
        }
        reject(error);
      });
    });
  }

  handleData = (result) => {
    return result.data;
  }
}