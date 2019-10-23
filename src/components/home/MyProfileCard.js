import React, { Component } from 'react';
// import { Link } from 'react-router-dom'


class MyProfileCard extends Component {
  render() {
    return (
      <div className="profilecard">
          <h3>Your Profile</h3>
        <div className="card-content">
        <h2>User Name: <span className="profilecard-info">{this.props.user.user_name}</span></h2>
        <h2>User Name: <span className="profilecard-info">{this.props.user.sunsignId}</span></h2>
        <h2>User Name: <span className="profilecard-info">{this.props.user.birthday}</span></h2>

          <button type="button" onClick={() => this.props.deleteUser(this.props.user.id)}>Delete Profile</button>
        </div>
      </div>
    );
  }
}

export default MyProfileCard;