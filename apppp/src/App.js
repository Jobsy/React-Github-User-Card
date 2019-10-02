import React from 'react';
import axios from "axios"
import { Card, Icon, Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
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
        {/* <div>
          <h1>User</h1>
          <ul>
            {this.state.users.name}
            {this.state.users.avatar_url}
            {this.state.users.followers_url}
            {this.state.users.location}
            {this.state.users.repos_url}
            {this.state.users.followers}
          </ul>
        </div>  */}

        <div class="ui card">
          <div class="ui slide masked reveal image">
            <img
              src={this.state.users.avatar_url}
              class="visible content"
              alt=""
            />
            <div class="hidden content">
              <h3>Other Info:</h3>
              <ul>
                <li>
                  <a href={this.state.users.gist_url}>Gists</a>
                </li>
                <li>
                  <a href={this.state.users.oganizations_url}>Oganizations</a>
                </li>
                <li>
                  <a href={this.state.users.repos_url}>Repos</a>
                </li>
                <li>
                  <a href={this.state.users.followers_url}>Followers</a>
                </li>
              </ul>
              <span>Last Upadted Date: {this.state.users.updated_at}</span>
            </div>
          </div>
          <div class="content">
            <a href={this.state.users.html_url} class="header">
              {this.state.users.name}
            </a>
            <span class="meta date">{this.state.users.login}</span>
            <div class="meta right floated">
              <span class="date">{this.state.users.location}</span>
            </div>
          </div>
          <div class="extra content">
            <span>{this.state.users.public_repos} Repos</span>
            <a class="right floated">
              <i class="users" />
              {this.state.users.followers} followers
            </a>
          </div>
        </div>


        <div>
          <h1>Followers</h1>
          <ul>
            {this.state.followers.map(follower => (
              <li>{follower.login}</li>
            ))}
          </ul>
        </div>

      </div>
    );
  }

}

export default App;
