import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
import MyProfileCard from './MyProfileCard'
import ProfileCardManager from '../../modules/ProfileCardManager'



class MyProfileList extends Component {
    state = {
      currentUser:"",
      user_name: "",
      birthday_month: "",
      birthday_day: "",
      sunsign: "",
      loadingStatus: true
    }

    componentDidMount(){
      ProfileCardManager.get(this.props.currentUserId)
      .then((currentUser) => {
          this.setState({
            currentUser: currentUser
          })
      })
    }


render(){
  return(
    <>
      <div className="myProfileList">
          <div className="myProfileListContent">

              <MyProfileCard
                  key={this.state.currentUser.id}
                  user={this.state.currentUser}
                  {...this.props} />


          </div>
      </div>
    </>
  )
}
}

export default MyProfileList;