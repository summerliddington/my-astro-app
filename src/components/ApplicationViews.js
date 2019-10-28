// import { Route , Redirect } from 'react-router-dom'
import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Login from './auth/Login'
import Home from './home/Home'
// import MyProfileList from '../components/home/MyProfileList'

export default class ApplicationViews extends Component {

isAuthenticated = () => localStorage.getItem("credentials") !== null

render() {
  return (
    <React.Fragment>
        <Route path="/login" render={props => {
              return <Login setUser={this.props.setUser} {...props} />
        }} />
        <Route exact path="/" render={(props) => {
          return <Home setUser={this.props.setUser} {...this.props} clearUser={this.props.clearUser} />
        }} />
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
