import React from 'react';
import axios from "axios"
import { Card, Icon, Button, Header, Image, Modal } from "semantic-ui-react";
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

    this.colorArr = ["red", "orange", "yellow", "olive", "green", "teal", "blue", "violet", "purple", "pink", "brown", "grey", "black"]
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
        <h1>GitHub User Card</h1>
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
          <div class="ui four cards">
            {this.state.followers.map((follower, index) => (
              this.color = `${this.colorArr[index]} card`,
              <a class={this.color}>
                <div class="image">
                  <img src={follower.avatar_url} />
                  <p>{follower.login}</p>
                </div>

                <Modal trigger={<Button>Show Details</Button>}>
                  <Modal.Header>{follower.login}</Modal.Header>
                  <Modal.Content image>
                    <Image wrapped size='medium' src={follower.avatar_url} />
                    <Modal.Description>
                      <Header>{follower.login} Default Profile</Header>
                      <p>
                        Follow this <a href={follower.html_url}>link</a> to checkout {follower.login} main page
        </p>
                      <p>Or click this <a href={follower.organizations_url}>link</a> to view current organisation</p>
                    </Modal.Description>
                  </Modal.Content>
                </Modal>
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
