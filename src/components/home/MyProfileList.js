import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
import ProfileCardManager from '../../modules/ProfileCardManager'
import Home from './Home'

class MyProfileList extends Component {

    state = {
        activeUser: parseInt(localStorage.getItem("credentials"))
    }
    componentDidMount(){
      ProfileCardManager.getUser("users").then((getUser) => {
          this.setState({
              getUser: getUser
          })
      })

    handleDelete = (id) => {
        ProfileCardManager.delete(id)
        .then(() => this.props.getData());
    }

  render() {
    return (
      <>
        <h1>Profile?</h1>
            {this.state.getUser.map(user => <MyProfileCard key={user.id} user={user}/>
                )
            }
            </>
    );
  }
}

export default MyProfileList;