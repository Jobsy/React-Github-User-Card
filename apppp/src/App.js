import React from 'react';
import axios from "axios"
import { Route, BrowserRouter } from 'react-router-dom';

import Users from './components/Users';
import Followers from './components/Followers';
// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: {},
      followers: []
    };

  }

  componentDidMount() {
    axios.get("https://api.github.com/users/Jobsy").then(response => {
      console.log("LLL: ", response);
      this.setState({ users: response.data });
    });

    axios.get("https://api.github.com/users/Jobsy/followers").then(response => {
      console.log("fff: ", response.data);
      this.setState({ followers: response.data });
    });
  }


  render() {
    return (
      <div className="app">
        <div>
          <h1>GitHub User Card</h1>
          <Route exact path="/" render={(props) => <Users {...props} usersProps={this.state.users} />} />
        </div>

        <div>
          <Route exact path="/followers" render={(props) => <Followers {...props} followersProps={this.state.followers} />} />
        </div>
      </div>
    );
  }
}

export default App;
