import React, { Component } from 'react';
import AppContent from './components/app-content';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputText: 'Hello ThreeJS!',
    };
  }

  handleSearch(e) {
    const { value } = e.target;
    const keyCode = e.which || e.keyCode;
    const ENTER = 13;

    if (keyCode === ENTER) {
      this.setState({
        inputText: value,
      });
      e.target.value = '';
    }
  }

  render() {
    return (
      <AppContent
        inputText={this.state.inputText}
        handleSearch={e => this.handleSearch(e)}
      />
    );
  }
}

export default App;
