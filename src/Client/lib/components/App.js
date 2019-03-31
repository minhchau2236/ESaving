import React from 'react';
import PropTypes from 'prop-types';
import routes from '../routes';
import Header from './header/HeaderComponent';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header></Header>
        {routes}
      </div>
    );
  }
}

export default App;