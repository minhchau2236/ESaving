import React from 'react';
import PropTypes from 'prop-types';
import routes from '../routes';
import Header from './header/HeaderComponent';
import { BrowserRouter as Router } from 'react-router-dom';


class App extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        {routes}
      </div>
    );
  }
}

// App.propTypes = {
//   children: PropTypes.object.isRequired
// };
//test a
//test b


export default App;
