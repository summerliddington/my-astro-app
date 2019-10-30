import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import GroupManager from '../../modules/GroupManager'


class MyCollectivesCard extends Component {

  state = {
    groups: []
  }

  handleDelete = (id) => {
    GroupManager.delete(id)
    .then(() => this.props.getData());
  }

  render() {
    return (

      <div className="myCollectivesCard">
        <div className="myCollectivesCardContent">

          <h3>Name: <span className="group-name">{this.props.group.group_name}</span></h3>
          <Link to={`/view/${this.props.group.id}`}><button>View</button></Link>
          <button type="button" onClick={() => this.props.deleteGroup(this.props.group.id)}>Delete Collective</button>
          <button type="button" onClick={() => {this.props.history.push(`/groups/${this.props.group.id}/edit`)}}>Edit</button>
        </div>
      </div>
    );
  }
}

export default MyCollectivesCard;