import React, { Component } from 'react';
import FriendsManager from '../../modules/FriendsManager'
import ProfileCardManager from '../../modules/ProfileCardManager'
// import GroupManager from '../../modules/GroupManager'


class ViewCollectiveCard extends Component {

  state = {
    users: [],
    sunsigns: [],
    groupUser: [],
    horoscope: {},
    sunsign: {}
  }
  handleDelete = (id) => {
    FriendsManager.deleteGroupUser(id)
    .then(() => this.props.getData());
  }

  componentDidMount= () => {
     URL = (sunsign) => {return `https://aztro.sameerkumar.website/?sign=${sunsign}&day=today`;}

    ProfileCardManager.getAll()
      .then((sunsigns) => {
        this.setState({
        sunsigns: sunsigns,
        sunsign:sunsigns.find(sunsigns => sunsigns.id === this.props.groupUsers.user.sunsignId)
    })
  })
  .then(() =>  console.log("here",URL(this.state.sunsign.sunsign.toLowerCase())))
    .then(() =>
            fetch(URL(this.state.sunsign.sunsign.toLowerCase()), {
                method: 'POST'
            }).then(response => response.json())
            .then(json => { this.setState({horoscope: json}); }))

  }


  render() {
    return (
      <div className="card">
        <div className="card-content">
        <h2><span className="friend-name">{this.props.groupUsers.user.user_name}</span></h2>

        <h2 className="friend-name">{this.state.sunsigns.filter(sunsigns => sunsigns.id === this.props.groupUsers.user.sunsignId).map(sunsigns => <h2>{sunsigns.sunsign}</h2>)} </h2>


        <p>Horosocope: {this.state.horoscope.description} </p>

          <button type="button" onClick={() => this.handleDelete(this.props.groupUsers.id)}>Delete User</button>
        </div>

      </div>
    );
  }
}

export default ViewCollectiveCard;