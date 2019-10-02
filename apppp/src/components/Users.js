import React from "react";
import {Link} from "react-router-dom"

class Users extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="ui card">
        <div class="ui slide masked reveal image">
          <img
            src={this.props.usersProps.avatar_url}
            class="visible content"
            alt=""
          />
          <div class="hidden content">
            <h3>Other Info:</h3>
            <ul>
              <li>
                <a href={this.props.usersProps.gist_url}>Gists</a>
              </li>
              <li>
                <a href={this.props.usersProps.oganizations_url}>Oganizations</a>
              </li>
              <li>
                <a href={this.props.usersProps.repos_url}>Repos</a>
              </li>
              <li>
                <a href={this.props.usersProps.followers_url}>Followers</a>
              </li>
            </ul>
            <span>Last Upadted Date: {this.props.usersProps.updated_at}</span>
          </div>
        </div>
        <div class="content">
          <a href={this.props.usersProps.html_url} class="header">
            {this.props.usersProps.name}
          </a>
          <span class="meta date">{this.props.usersProps.login}</span>
          <div class="meta right floated">
            <span class="date">{this.props.usersProps.location}</span>
          </div>
        </div>
        <div class="extra content">
          <span>{this.props.usersProps.public_repos} Repos</span>
          {/* <a class="right floated">
            <i class="users" />
            {this.props.usersProps.followers} followers
          </a> */}
          <Link exact to="/followers" class="right floated">
            <i class="users" />
            {this.props.usersProps.followers} followers
          </Link>
        </div>
      </div>
    )
  }
}


export default Users;