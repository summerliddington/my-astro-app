import React, { Component } from 'react';
// import {Link} from 'react-router-dom'


class MyProfileCard extends Component {
  render() {
    return (
      <div className="home">
        <div className="profile-card">
          <h2>Your Profile!</h2>
          <h3>User Name: <span className="card-employeename">{this.props.user.user_name}</span></h3>

          <p>Astrology Sign: {this.props.user.sunsignId}</p>
          <p>Birthday Month: {this.props.user.birthday_month}</p>
          <p>Birthday Month: {this.props.user.birthday_day}</p>
          <button type="button" onClick={() => this.props.deleteProfile(this.props.user.id)}>Delete Profile</button>
          <button type="button" onClick={() => {this.props.history.push(`/${this.props.user.id}/edit`)}}>Edit</button>
        </div>
      </div>
    );
  }
}

export default MyProfileCard;