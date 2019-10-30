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
      sunsignId: "",
      loadingStatus: true
    }

    componentDidMount(){
      console.log("currentUser", this.props.currentUserId)
      ProfileCardManager.get(this.props.currentUserId)
      .then((currentUser) => {
        console.log(currentUser, "cu")
          this.setState({
            currentUser: currentUser
          })
      })
    }


render(){

  return(
    <>
      <div className="profile-card">
          <div className="profile-content">

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