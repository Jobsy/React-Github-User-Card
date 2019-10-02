import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: {},
      followers: []
    };
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }

}

export default App;
