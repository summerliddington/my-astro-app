import React, { Component } from 'react';
import ProfileCardManager from "../../modules/ProfileCardManager"
// import {Link} from 'react-router-dom'


class MyProfileCard extends Component {

state = {
  loadingStatus: true
}


  // handleDelete = () => {
  //   this.setState({loadingStatus: true})
  //   ProfileCardManager.delete(this.props.activeUserId)
  //   .then(() => this.props.history.push("/login"))
  // }

  render() {
    return (
      <div className="profile-card">
        <div className="profile-content">
          <h1>Your Profile!</h1>
          <h2>User Name: {this.props.user.user_name}</h2>
          <h2>Birthday Month: {this.props.user.birthday_month}</h2>
          <h2>Birthday Month: {this.props.user.birthday_day}</h2>
          <h2>Astrology Sign: {this.props.user.sunsignId}</h2>
          {/* <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Delete Profile</button> */}
          <button type="button" onClick={() => this.props.deleteProfile(this.props.user.id)}>Delete Profile</button>
          {/* <button type="button" onClick={() => {this.props.history.push(`/${this.props.user.id}/edit`)}}>Edit</button> */}
        </div>
      </div>
    );
  }
}

export default MyProfileCard;