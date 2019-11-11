import React, { Component } from 'react';
import FriendsManager from '../../modules/FriendsManager';
// import GroupManager from '../../modules/GroupManager'

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
      <div className="friendsCardContainer">
        <div className="friendsCardContent">

        <h2><span>{this.props.users.user_name}</span></h2>
          <button className="addBtn" type="button" onClick={this.onAddClick}>Add To Collective</button>
        </div>
      </div>
    );
  }
}

export default FriendsCard;