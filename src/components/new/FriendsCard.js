import React, { Component } from 'react';
import FriendsManager from '../../modules/FriendsManager';
// import GroupManager from '../../modules/GroupManager'

// import FriendsManager from '../../modules/FriendsManager';

class FriendsCard extends Component {

    state = {
        users: [],
        user_name: "",
        userId: "",
        group_name: "",
        groupId: ""
    }
    onAddClick = () => {
        const newGroupUser = {
            groupId: this.props.groupId,
            userId: this.props.users.id
        }
        FriendsManager.post(newGroupUser)
        .then(() => this.props.updateCurrentGroupUserState())
    }
  render() {
    return (
      <div className="friend-card">
        <div className="friend-card-content">

        <h3>Friend Name: <span className="friend-name">{this.props.users.user_name}</span></h3>
          <button type="button" onClick={this.onAddClick}>Add To Collective</button>
        </div>
      </div>
    );
  }
}

export default FriendsCard;