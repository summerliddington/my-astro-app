import React, { Component } from 'react'
import MyProfileList from "./MyProfileList";
import JoinedCollectivesList from "./JoinedCollectivesList";
import MyCollectivesList from "./MyCollectivesList"
import APIManager from '../../modules/APIManager';

class Home extends Component {

  state = {
    users: []
  }

  render(){

    return(
      <>
      <MyProfileList setUser={this.props.setUser} {...this.props} clearUser={this.props.clearUser} />
      <hr />
      <JoinedCollectivesList />
      <hr />
      <MyCollectivesList />
      </>
    )
  }

}

export default Home;