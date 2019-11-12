import React, { Component } from 'react';
import GroupManager from '../../modules/GroupManager';
import FriendsList from '../new/FriendsList';
import FriendsManager from '../../modules/FriendsManager';
import { Link } from 'react-router-dom'


class NewWithFriends extends Component {

  state = {
    group_name: "",
    groupId: "",
    userId: "",
    users: [],
    groupUsers: []
    }

//   handleView = () => {
//     this.props.history.push("/view")
// }

updateCurrentGroupUserState = () => {
    FriendsManager.getGroupUsers(parseInt(this.props.match.params.groupId))
    .then((groupUsers) => {
        this.setState({
            groupUsers: groupUsers

        })
    })
}

  componentDidMount(){
      let newState = {}
    GroupManager.get(parseInt(this.props.match.params.groupId))
    .then((group) => {
        newState.group_name = group.group_name
        newState.groupId = group.id
        newState.userId = group.userId
    })
    .then(() => FriendsManager.getGroupUsers(parseInt(this.props.match.params.groupId)))
    .then((groupUsers) => newState.groupUsers = groupUsers)
    .then(() => this.setState(newState))
  }

  render() {
    return (
        <>
      <div className="newWithFriendsContainer">
        <div className="friendsNameAndView">
            <h3>{this.state.group_name}</h3>

            <Link to={`/view/${this.props.match.params.groupId}`}><button className="viewBtn">View</button></Link>

            <h3>List of Friends in Collective</h3>
            {this.state.groupUsers.length > 0
                ? <>{this.state.groupUsers.map((user) => <h2>{user.user.user_name}</h2>)}</>
                : ""}
        </div>

      <hr/>
        <div>
            <h3>Friends to Add To Collective</h3>
            <FriendsList
            updateCurrentGroupUserState={this.updateCurrentGroupUserState}
            key={this.state.groupId}
            groupId={this.state.groupId} />
        </div>
      </div>
      </>
    );
  }
}

export default NewWithFriends;