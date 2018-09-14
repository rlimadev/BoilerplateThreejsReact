import React, { Component } from 'react';
import AppContent from './components/app-content';

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: 1,
    };
  }

  render() {
    return (
      <AppContent value={this.state.value} />
    );
  }
}

export default App;
