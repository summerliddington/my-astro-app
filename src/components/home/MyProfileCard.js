import React, { Component } from 'react';
// import {Link} from 'react-router-dom'
import ProfileCardManager from '../../modules/ProfileCardManager'


class MyProfileCard extends Component {

state = {
  users: [],
  sunsign: ""
}
componentDidMount= () => {
  ProfileCardManager.getSunsign(this.props.user.sunsignId)
  .then(res => this.setState({sunsign: res.sunsign}))
};
  render() {
    return (
      <div className="profile-card">
        <div className="profile-content">
          <h1>Your Profile!</h1>
          <h2>User Name: {this.props.user.user_name}</h2>
          <h2>Birthday Month: {this.props.user.birthday_month}</h2>
          <h2>Birthday Month: {this.props.user.birthday_day}</h2>
          { this.state.sunsign?
          <h2>Astrology Sign: {this.state.sunsign}</h2>
        : ""}
          <button type="button" onClick={() => {this.props.history.push(`/${this.props.user.id}/edit`)}}>Edit</button>

        </div>
      </div>
    );
  }
}

export default MyProfileCard;