import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import GroupManager from '../../modules/GroupManager'


class MyCollectivesCard extends Component {

  state = {
    groups: [],
    group_name: "",
    userId: ""
}
  currentUserId = parseInt(sessionStorage.getItem("userId"))

  handleDelete = (id) => {
    GroupManager.delete(id)
    .then(() => this.props.getData());
  }

  render() {
    return (

      <div className="myCollectivesCard">
        <div className="myCollectivesCardContent">

          <h3><span>{this.props.group.group_name}</span></h3>
          <Link to={`/view/${this.props.group.id}`}><button className="viewButton">View</button></Link>

          <button className="deleteButton"
          type="button" onClick={() => this.handleDelete(this.props.group.id)}>Delete Collective</button>
        </div>
      </div>
    );
  }
}

export default MyCollectivesCard;