import axios from 'axios';

export default class HttpConnector {
  constructor() {
    this.host = 'http://localhost:3000';
    this.get = this.get.bind(this);
  }

  get = function (url, handleFunc, errorHandleFunc) {
    const host = this.host;
    return new Promise(function (resolve, reject) {
      const getUrl = `${host}${url}`;
      axios.get(getUrl).then((result) => {
        let resultData = result.data.data;
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

  post = function (url, data, handleFunc, errorHandleFunc) {
    const host = this.host;
    return new Promise(function (resolve, reject) {
      const postUrl = `${host}${url}`;
      axios({
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        url: postUrl,
        data,
      }).then((result) => {
        let resultData = result.data.data;
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

  delete = function (url, id, handleFunc, errorHandleFunc) {
    const host = this.host;
    return new Promise(function (resolve, reject) {
      const deleteUrl = `${host}${url}/${id}`;
      axios.delete(deleteUrl).then((result) => {
        let resultData = result.data.data;
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
}