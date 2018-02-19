import React, { Component } from 'react';
import './reset.css'
import router from './router/router'


class App extends Component {
  render() {
    return (
      <div>
        { router }
      </div>
    );
  }
}

export default App;
