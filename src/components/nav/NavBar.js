import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom"
import './NavBar.css'

class NavBar extends Component {
  handleLogout = () => {
    this.props.clearUser();
    this.props.history.push('/login');
}
render(){

    return (
      <header>
          <nav className="navContainer">
            <div className="navTitle">Astro Collective</div>
            <ul className="navLinks">
              <li><Link className="nav-link" to="/">Home</Link></li>
              <li><Link className="nav-link" onClick={this.handleLogout}>Logout</Link></li>
            </ul>
          </nav>
      </header>
    )
  }
}
export default withRouter(NavBar);