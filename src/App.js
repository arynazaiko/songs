import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import HomePage from './screens/HomePage';

class App extends Component {
  render() {
    return (
      <div className="container py-5">
        <Route exact path="/" component={HomePage} />
      </div>
    );
  }
}

export default App;
