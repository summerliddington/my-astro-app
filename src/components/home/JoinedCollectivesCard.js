import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class JoinedCollectivesCard extends Component {
  render() {
    return (
      <div className="">
        <div className="card-content">

          <h3>Name: <span className="card-ownername">{this.props.group.name}</span></h3>
          <Link to={`/owner/${this.props.group.id}`}><button>View</button></Link>
          <button type="button" onClick={() => this.props.deleteGroup(this.props.owner.id)}>Delete Collective</button>
        </div>
      </div>
    );
  }
}

export default JoinedCollectivesCard;