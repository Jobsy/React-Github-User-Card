import React from "react";
import { Card, Icon, Button, Header, Image, Modal } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

class Followers extends React.Component {
  constructor(props) {
    super(props);
    this.colorArr = [
      "red", "orange", "yellow", "olive", "green", "teal", "blue", "violet", "purple", "pink", "brown", "grey", "black"
    ]
  }

  render() {
    return (
      <div>
        <h1>Followers</h1>
        <div class="ui four cards">
          {this.props.followersProps === [] ? null : this.props.followersProps.map((follower, index) => (
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
    )
  }
}


export default Followers;