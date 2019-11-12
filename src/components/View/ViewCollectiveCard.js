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
  cardDisplay = () => {
    if (this.state.sunsign.id === 1) {
        return (<img id="cardIcon" src={require('./aries_01.gif')} alt="Aries" />
        )
    } else if (this.state.sunsign.id === 2) {
        return (<img id="cardIcon" src={require('./taurus.02.gif')} alt="Taurus" />)
    } else if (this.state.sunsign.id === 3) {
        return (<img id="cardIcon" src={require('./gemini_03.gif')} alt="Gemini" />)
    } else if (this.state.sunsign.id === 4) {
        return (<img id="cardIcon" src={require('./cancer_04.gif')} alt="Cancer" />)
    } else if (this.state.sunsign.id === 5) {
      return (<img id="cardIcon" src={require('./leo_05.gif')} alt="Cancer" />)
    } else if (this.state.sunsign.id === 6) {
      return (<img id="cardIcon" src={require('./virgo_06.gif')} alt="Cancer" />)
    } else if (this.state.sunsign.id === 7) {
      return (<img id="cardIcon" src={require('./libra_07.gif')} alt="Cancer" />)
    } else if (this.state.sunsign.id === 8) {
      return (<img id="cardIcon" src={require('./scorpio_08.gif')} alt="Cancer" />)
    } else if (this.state.sunsign.id === 9) {
      return (<img id="cardIcon" src={require('./sagittarius_09.gif')} alt="Cancer" />)
    } else if (this.state.sunsign.id === 10) {
      return (<img id="cardIcon" src={require('./capricorn_10.gif')} alt="Cancer" />)
    } else if (this.state.sunsign.id === 11) {
      return (<img id="cardIcon" src={require('./aquarius_11.gif')} alt="Cancer" />)
    } else if (this.state.sunsign.id === 12) {
      return (<img id="cardIcon" src={require('./pisces_12.gif')} alt="Cancer" />)
    }
}

  render() {

    return (
      <div className="card">
        <div className="card-content">
          <h2 className="friend-name">{this.props.groupUsers.user.user_name}</h2>

          <h2 className="friend-sign">{this.state.sunsigns.filter(sunsigns => sunsigns.id === this.props.groupUsers.user.sunsignId).map(sunsigns => <h2>{sunsigns.sunsign}</h2>)} </h2>
          <div className="imageContainer">
                            {this.cardDisplay()}
                    </div>

          <p><strong>Horosocope:   </strong> {this.state.horoscope.description} </p>

          <button type="button" onClick={() => this.handleDelete(this.props.groupUsers.id)}>Delete Friend</button>
        </div>
       </div>
    );
  }
}

export default ViewCollectiveCard;