import React, { Component } from 'react';
import GroupManager from '../../modules/GroupManager'

class ViewCollectiveCard extends Component {

  handleDelete = id => {
    GroupManager.delete(id)
    .then(() => this.props.getData());
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          {/* <picture>
            <img src={require('./dog.svg')} alt="My Dog" />
          </picture> */}
        <h3>Friend Name: <span className="friend-name">{this.props.users.user_name}</span></h3>
          <button type="button" onClick={() => this.props.handleDelete(this.props.groupUser.id)}>Delete User</button>
        </div>
      </div>
    );
  }
}

export default ViewCollectiveCard;