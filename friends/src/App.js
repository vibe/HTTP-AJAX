import React, { Component } from 'react';
import FriendsApp from './containers/friends';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
          <FriendsApp />
      </div>
    );
  }
}

export default App;
