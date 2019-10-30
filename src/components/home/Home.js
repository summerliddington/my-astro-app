import React, { Component } from 'react'
import MyProfileList from "./MyProfileList";
import JoinedCollectivesList from "./JoinedCollectivesList";
import MyCollectivesList from "./MyCollectivesList"
// import APIManager from '../../modules/APIManager';

class Home extends Component {

  state = {
    loadingStatus: true
  }

  render(){

    return(
      <>
      <MyProfileList setUser={this.props.setUser} currentUserId={this.props.currentUserId} {...this.props} />
      <hr />
      <JoinedCollectivesList />
      <hr />
      <MyCollectivesList  />
      </>
    )
  }

}

export default Home;