// import { Route , Redirect } from 'react-router-dom'
import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Login from './auth/Login'
import Home from './home/Home'
import NewGroupForm from './new/NewGroupForm'
import ViewCollectiveList from './view/ViewCollectiveList'
import NewWithFriends from './new/NewWithFriends'
import FriendsList from './new/FriendsList'
// import MyProfileList from '../components/home/MyProfileList'

export default class ApplicationViews extends Component {

isAuthenticated = () => sessionStorage.getItem("credentials") !== null

render() {
  return (
    <React.Fragment>
        <Route exact path="/login" render={props => {
              return <Login setUser={this.props.setUser} {...props} />
        }} />
        <Route exact path="/" render={props => {
          return <Home setUser={this.props.setUser} currentUserId={this.props.currentUserId} {...props} />
        }} />
        <Route path="/new" render={(props) => {
          return <NewGroupForm {...props} />
        }}/>
        <Route path="/newfriends/:groupId(\d+)" render={(props) => {
          return <NewWithFriends {...props} />
        }}/>
        <Route path="/view/:groupId(\d+)" render={(props) => {
          return <ViewCollectiveList {...props} />
        }}/>
        <Route path="newfriends" render={(props) => {
          return <FriendsList {...props} />
        }}/>
        {/* <Route path="/:userId(\d+)" render={(props) => {
        return <MyProfileList userId={parseInt(props.match.params.userId)} />
        }} /> */}
        </React.Fragment>
    );
}
}
