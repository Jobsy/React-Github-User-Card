import React from 'react';
import axios from "axios"
// import logo from './logo.svg';
// import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
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
      <div>
        <h1>Hello World</h1>
        <div>
          <h1>User</h1>
          <ul>
            {this.state.users.name}
            {this.state.users.avatar_url}
            {this.state.users.followers_url}
            {this.state.users.location}
            {this.state.users.repos_url}
            {this.state.users.followers}
          </ul>
        </div> 
      </div>
    );
  }

}

export default App;
