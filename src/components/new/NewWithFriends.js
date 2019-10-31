import React, { Component } from 'react';
import GroupManager from '../../modules/GroupManager';
import FriendsList from '../new/FriendsList';
import FriendsManager from '../../modules/FriendsManager';


class NewWithFriends extends Component {

  state = {
    group_name: "",
    groupId: "",
    userId: "",
    users: [],
    groupUsers: []
    }

  handleDelete = () => {
    GroupManager.delete(this.props.userId)
    .then(() => this.props.history.push("/"))
}

updateCurrentGroupUserState = () => {
    FriendsManager.getGroupUsers(parseInt(this.props.match.params.groupId))
    .then((groupUsers) => {
        this.setState({
            groupUsers: groupUsers

        })
    })
}

  componentDidMount(){
    GroupManager.get(parseInt(this.props.match.params.groupId))
    .then((group) => {
        console.log(group)
      this.setState({
        group_name: group.group_name,
        groupId: group.id,
        userId: group.userId,
      });
    });
  }

  render() {
     console.log("GROUPID", parseInt(this.props.match.params.groupId))
    return (
        <>
      <div className="new-group-card">
        <div className="card-content">
            <h3>Name: {this.state.group_name}</h3>
            <button type="button" onClick={this.handleDelete}>Delete</button>
        </div>
            <h3>List of Friends in Group</h3>
            {this.state.groupUsers.length > 0
                ? <>{this.state.groupUsers.map((user) => <p>{user.user.user_name}</p>)}</>
                : ""}
      </div>
      <hr/>
      <div>
          <h3>Friends to Add To Group</h3>
          <FriendsList
          updateCurrentGroupUserState={this.updateCurrentGroupUserState}
          key={this.state.groupId}
          groupId={this.state.groupId} />
      </div>
      </>
    );
  }
}

export default NewWithFriends;