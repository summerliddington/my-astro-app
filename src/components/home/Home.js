import React, { Component } from 'react'
import MyProfileList from "./MyProfileList";
import JoinedCollectivesList from "./JoinedCollectivesList";
import MyCollectivesList from "./MyCollectivesList"
import APIManager from '../../modules/APIManager';

class Home extends Component {

  state = {
    users: []
  }

  getOrders = () => {
    // APIManager.getAllOrders(this.props.userId)
    // .then((results) => {
    //   this.setState({
    //     orders: results
    //   })
    // })
  }

  componentDidMount(){
    this.getOrders();
  }

  render(){

    return(
      <>
      <MyProfileList  />
      <hr />
      <JoinedCollectivesList />
      <hr />
      <MyCollectivesList />
      </>
    )
  }

}

export default Home;