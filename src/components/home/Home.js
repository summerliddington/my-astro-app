import React, { Component } from 'react'
import MyProfileList from "./MyProfileList";
import MyCollectivesList from "./MyCollectivesList"
import './home.css'


class Home extends Component {

  state = {
    loadingStatus: true
  }

  render(){

    return(
      <>
      <div id="homeBackground">
      <MyProfileList
      setUser={this.props.setUser}
      currentUserId={this.props.currentUserId}
      {...this.props} />
      <MyCollectivesList  />
      </div>
      </>
    )
  }

}

export default Home;