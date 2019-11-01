import React, { Component } from 'react';
import FriendsManager from '../../modules/FriendsManager'

class ViewCollectiveCard extends Component {

  handleDelete = id => {
    FriendsManager.deleteGroupUser(id)
    .then(() => this.props.getData());
  }


  render() {
      console.log(this.props.groupUsers)
    return (
      <div className="card">
        <div className="card-content">
        <h3>Friend Name: <span className="friend-name">{this.props.groupUsers.user.user_name}</span></h3>
          <button type="button" onClick={() => this.props.handleDelete(this.props.groupUser.id)}>Delete User</button>
        </div>
      </div>
    );
  }
}

export default ViewCollectiveCard;