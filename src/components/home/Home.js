import React, { Component } from 'react'
import MyProfileList from "./MyProfileList";
import MyCollectivesList from "./MyCollectivesList"


class Home extends Component {

  state = {
    loadingStatus: true
  }

  render(){

    return(
      <>
      <MyProfileList
      setUser={this.props.setUser}
      currentUserId={this.props.currentUserId}
      {...this.props} />
      <hr />
      <MyCollectivesList  />
      </>
    )
  }

}

export default Home;