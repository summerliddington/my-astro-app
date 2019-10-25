// import { Route , Redirect } from 'react-router-dom'
import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Login from './auth/Login'
import Home from './home/Home'


export default class ApplicationViews extends Component {

isAuthenticated = () => localStorage.getItem("credentials") !== null

render() {
  return (
    <React.Fragment>
        <Route exact path="/" render={(props) => {
            return <Home user={this.props.user} {...props} />
          }} />
      <Route path="/login" render={props => {
            return <Login setUser={this.props.setUser} {...props} />
      }} />

        </React.Fragment>
    );
}
}
