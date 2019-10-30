import React, { Component } from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";
import Login from "../components/auth/Login"
import Register from "../components/auth/Register"
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
      <React.Fragment>
      {(this.state.user) ?
      <>
        <NavBar user={this.state.user} clearUser={this.clearUser} />
        <ApplicationViews user={this.state.user}
                          setUser={this.setUser}
                          currentUserId={this.state.currentUserId}
                          // clearUser={this.clearUser}
                          {...this.props} />
      </>
      :<><div className="logRegContainer">
      <Login setUser={this.setUser}/>
      <Register setUser={this.setUser} />
    </div>
    </>}
    </React.Fragment>
    );
  }
}

export default LandingPage