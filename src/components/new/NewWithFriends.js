import React, { Component } from 'react';
import GroupManager from '../../modules/GroupManager';


class NewWithFriends extends Component {

  state = {
    group_name: "",
    groupId: "",
    userId: "",
    users: [],
    currentGroupUsers: []
    }

  handleDelete = () => {
    GroupManager.delete(this.props.userId)
    .then(() => this.props.history.push("/"))
}

  componentDidMount(){
    GroupManager.get(this.props.match.params.groupId)
    .then((group) => {
        console.log(group)
      this.setState({
        group_name: group.group_name,
        groupId: group.groupId,
        userId: group.userId,
      });
    });
  }

  render() {
     console.log(this.state.group_name)
    return (
      <div className="new-group-card">
        <div className="card-content">
            <h3>Name: {this.state.group_name}</h3>

            <button type="button" onClick={this.handleDelete}>Delete</button>
        </div>
      </div>
    );
  }
}

export default NewWithFriends;