import React, { Component } from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";
import Login from "../components/auth/Login"
import Register from "../components/auth/Register"
import './LandingPage.css'
import '../components/LandingPage.css'
// import { withRouter } from "react-router"



class LandingPage extends Component {
  //LandingPage extends to Component is part of React stating that take this data and add more to it from the component
    state = {
      user: false
    }

    // Check if credentials are in local storage
    //returns true/false
    isAuthenticated = () => sessionStorage.getItem("userId") !== null

    setUser = (authObj) => {

    sessionStorage.setItem(
        "userId",
        JSON.stringify(authObj.id)
      )
      this.setState({
        user: this.isAuthenticated(),
        currentUserId: parseInt(sessionStorage.getItem("userId"))
      });
    }

    clearUser = () => {
      sessionStorage.clear()

      this.setState({
          user: this.isAuthenticated()
      });

  }
    componentDidMount(){
      this.setState({
        user: this.isAuthenticated(),
        currentUserId: parseInt(sessionStorage.getItem("userId"))
      });
    }

  render() {
    return (
      <div className=".landingBackground">
      <React.Fragment>

      {(this.state.user) ?
      <>

        <NavBar user={this.state.user} clearUser={this.clearUser} />
        <ApplicationViews user={this.state.user}
                          setUser={this.setUser}
                          currentUserId={this.state.currentUserId}
                          clearUser={this.clearUser}
                          {...this.props} />
      </>
      :<><div className="logRegContainer">
          <div className="titleImage">
          <h3 id="title">Astro Collective</h3>
          <div id="image"><img src={require('../components/auth/shape1_03.gif')} /></div>
          </div>

      <Login setUser={this.setUser}/>
      <Register setUser={this.setUser} />
    </div>

    </>}

    </React.Fragment>
    </div>
    );
  }
}

export default LandingPage