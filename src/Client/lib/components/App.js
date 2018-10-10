import React from 'react';
import PropTypes from 'prop-types';
import routes from '../routes';
import Header from './header/HeaderComponent';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <h2>ESaving</h2>
          <Header />
          {routes}
        </div>
      </Router>
    );
  }
}

// App.propTypes = {
//   children: PropTypes.object.isRequired
// };

export default App;
