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
    this.value = e.target.value;
    this.keyCode = e.which || e.keyCode;
    this.ENTER = 13;

    console.log('enter');
    if (this.keyCode === this.ENTER) {
      this.setState({
        inputText: 'ivonete lima',
      });
    }
    console.log(this.state.inputText);
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
