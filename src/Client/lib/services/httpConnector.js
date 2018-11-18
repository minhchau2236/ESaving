import axios from 'axios';
import { authHeader } from '../helpers/auth-header';

export default class HttpConnector {
  constructor() {
    this.host = 'http://localhost:4000';
    this.get = this.get.bind(this);
    this.post = this.post.bind(this);
    this.delete = this.delete.bind(this);
  }

  get = function (url, handleFunc, errorHandleFunc) {
    const self = this;
    return new Promise((resolve, reject) => {
      const getUrl = `${self.host}${url}`;
      const headers = authHeader();
      axios.get(getUrl, {headers}).then(function (result) {
        let handleFunc = handleFunc && typeof handleFunc === 'function' ? handleFunc : self.handleData;
        let resultData = handleFunc(result);      
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
    const self = this;
    return new Promise(function (resolve, reject) {
      const postUrl = `${self.host}${url}`;
      const headers = authHeader();
      axios({
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          ...headers
        },
        url: postUrl,
        data,
      }).then((result) => {       
        let handleFunc = handleFunc && typeof handleFunc === 'function' ? handleFunc : self.handleData;
        let resultData = handleFunc(result);
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
    const self = this;
    return new Promise((resolve, reject) => {
      const deleteUrl = `${self.host}${url}/${id}`;
      const headers = authHeader();
      axios.delete(deleteUrl, {headers}).then((result) => {
        let handleFunc = handleFunc && typeof handleFunc === 'function' ? handleFunc : self.handleData;
        let resultData = handleFunc(result);     
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