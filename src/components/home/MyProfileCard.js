import React, { Component } from 'react';
// import {Link} from 'react-router-dom'
import ProfileCardManager from '../../modules/ProfileCardManager'
import './home.css'


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
      <div className="myProfileCard">
        <div className="myProfileCardContent">
          <h1>Your Astro Profile!</h1>
          <h2><span>{this.props.user.user_name}</span></h2>
          <h2>{this.props.user.birthday_month}      {this.props.user.birthday_day}</h2>
          { this.state.sunsign?
          <h2>{this.state.sunsign}</h2>
        : ""}
          <button className="editButton" type="button" onClick={() => {this.props.history.push(`/${this.props.user.id}/edit`)}}>Edit</button>

        </div>
      </div>
    );
  }
}

export default MyProfileCard;