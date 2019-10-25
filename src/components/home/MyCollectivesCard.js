import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class MyCollectivesCard extends Component {
  render() {
    return (
      <div className="">
        <div className="card-content">

          <h3>Name: <span className="card-ownername">{this.props.owner.name}</span></h3>
          <Link to={`/owner/${this.props.owner.id}`}><button>Details</button></Link>
          <button type="button" onClick={() => this.props.deleteOwner(this.props.owner.id)}>Fire</button>
        </div>
      </div>
    );
  }
}

export default MyCollectivesCard;