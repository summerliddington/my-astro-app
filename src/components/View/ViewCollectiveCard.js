import React, { Component } from 'react';
import FriendsManager from '../../modules/FriendsManager'

class ViewCollectiveCard extends Component {

    state = {
        users: [],
        groupUser: [],
        user_name: "",
        userId: "",
        group_name: "",
        groupId: ""
    }

  handleDelete = id => {
    FriendsManager.delete(id)
    .then(() => this.props.getData());
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
        <h3>Friend Name: <span className="friend-name">{this.props.users.user_name}</span></h3>
          <button type="button" onClick={() => this.props.handleDelete(this.props.groupUser.id)}>Delete User</button>
        </div>
      </div>
    );
  }
}

export default ViewCollectiveCard;