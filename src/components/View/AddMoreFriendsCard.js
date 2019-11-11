import React, { Component } from 'react';
import FriendsManager from '../../modules/FriendsManager';

class AddMoreFriendsCard extends Component {

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
      <div className="friendsList">
        <div className="friendsCardContent">

        <h2><span className="friend-name">{this.props.users.user_name}</span></h2>
          <button className="addBtn" type="button" onClick={this.onAddClick}>Add To Collective</button>
        </div>
      </div>
    );
  }
}

export default AddMoreFriendsCard;