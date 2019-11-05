import React, { Component } from 'react';
import FriendsManager from '../../modules/FriendsManager'

class ViewCollectiveCard extends Component {

  state = {
    users: [],
    sunsign: ""
  }

  handleDelete = id => {
    FriendsManager.deleteGroupUser(id)
    .then(() => this.props.getData());
  }
  // componentDidMount= () => {
  //   FriendsManager.getFriendSign(parseInt(this.props.match.params.sunsignId))
  //     .then(sunsign => {
  //       this.setState({
  //     sunsign: sunsign
  //   })
  // })

  render() {
    return (
      <div className="card">
        <div className="card-content">
        <h3>Friend Name: <span className="friend-name">{this.props.groupUsers.user.user_name}</span></h3>

        <h2>Astrology Sign: {this.props.sunsignId.sunsign.sunsign} </h2>


        <p>Horosocope: </p>
          <button type="button" onClick={() => this.props.handleDelete(this.props.groupUser.id)}>Delete User</button>
        </div>
      </div>
    );
  }
}

export default ViewCollectiveCard;