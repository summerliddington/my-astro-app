import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
import MyProfileCard from './MyProfileCard'
import ProfileCardManager from '../../modules/ProfileCardManager'
// import Home from './Home'

class MyProfileList extends Component {
    state = {
      user: true
    }
    deleteProfile = id => {
      ProfileCardManager.delete(id)
      .then(() => {
          this.setState({
              user: user
          })
        })
      }
    }
componentDidMount(){

  ProfileCardManager.getUser()
  .then((users) => {
      this.setState({
          employees: employees
      })
  })
}

render(){

  return(
      <div className="container-cards">
          {this.state.users.id(user =>
              <MyProfileCard key={user.id}
                  user={user}
                  deleteUser={this.deleteUser}
                  {...this.props}
                  />
          )}
      </div>
  )
}

export default MyProfileList;