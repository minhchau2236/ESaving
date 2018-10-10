import React from 'React';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';
import App from 'components/App';
// import StateApi from 'state-api';
import config from 'config';

const serverRender = () => {
  // const res = await axios.get(`http://${config.host}:${config.port}/data`);
  // const store = new StateApi(res.data);    
  return {
    initialMarkup: ReactDOMServer.renderToString(
      <App />
    ),
  };
};

export default serverRender;