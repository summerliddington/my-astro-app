// import { Route , Redirect } from 'react-router-dom'
import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Login from './auth/Login'
import Home from './home/Home'
import NewGroupForm from './new/NewGroupForm'
// import MyProfileList from '../components/home/MyProfileList'

export default class ApplicationViews extends Component {

isAuthenticated = () => sessionStorage.getItem("credentials") !== null

render() {
  return (
    <React.Fragment>
        <Route path="/login" render={props => {
              return <Login setUser={this.props.setUser} {...props} />
        }} />
        <Route exact path="/" render={props => {
          return <Home setUser={this.props.setUser} currentUserId={this.props.currentUserId} {...props} />
        }} />
        <Route path="/new" render={(props) => {
          return <NewGroupForm {...props} />
        }}/>



        {/* <Route path="MyProfileList/:userId(\d+)" render={(props) => {
          return <MyProfileList userId={parseInt(props.match.params.userId)} {...props} />
        }} />
         */}
        {/* <Route exact path="/" render={(props) => {
            return <Home user={this.props.user} {...props} />
          }} />

        <Route path="/:userId(\d+)" render={(props) => {
          return <MyProfileList userId={parseInt(props.match.params.userId)} />
        }} /> */}
        </React.Fragment>
    );
}
}
