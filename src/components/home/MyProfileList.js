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

    activeUserId = parseInt(localStorage.getItem("userId"))

    componentDidMount(){
      ProfileCardManager.get(this.activeUserId)
      .then((currentUser) => {
          this.setState({
            currentUser: currentUser
          })
      })
    }

    deleteProfile(id) {
      this.props.clearUser()
      ProfileCardManager.delete("users", id)
    }


render(){

  return(
    <>
      <div className="profile-card">
          <div className="profile-content">
            {/* <h2>User Name: {this.state.user_name}</h2>
            <h2>Birthday Month: {this.state.birthday_month}</h2>
            <h2>Birthday Day: {this.state.birthday_day}</h2>
            <h2>Astrology Sign: {this.state.sunsignId} </h2> */}

              <MyProfileCard
                  key={this.state.currentUser.id}
                  user={this.state.currentUser}
                  clearUser={this.props.clearUser}
                  deleteProfile={this.deleteProfile}
                  {...this.props} />


          </div>
      </div>
    </>
  )
}
}

export default MyProfileList;