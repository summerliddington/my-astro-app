import React, { Component } from "react"
import LoginManager from "../../modules/LoginManager";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './LoginRegister.css'
import {withRouter} from 'react-router-dom'

class Login extends Component {

  // Set initial state
  state = {
    user_name: "",
    password: "",
    id: ""
  }

  // Update state whenever an input field is edited
  handleFieldChange = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  handleLogin = (e) => {
    e.preventDefault()
    LoginManager.getUserData("users").then((users) => {
      let singleUser = users.find(
          user =>
              user.password.toLowerCase() === this.state.password.toLowerCase() &&
              user.user_name.toLowerCase() === this.state.user_name.toLowerCase()
      );
      if (this.state.user_name === "") {
          window.alert("Please enter User Name")
      } else if (this.state.password === "") {
          window.alert("Please enter password")
      } else if (singleUser) {
          this.props.setUser(singleUser);
      } else {
          window.alert("User Name and Password do not match")
      }

  }).then(() => this.props.history.push("/"))

}

render() {
  return (
      <>
      <div className="pageContainer">
      <div className="logRegForm">
          <h3 className="logRegTitle" id="leftForm">Login</h3>
      <Form onSubmit={this.handleLogin} inline>
              <FormGroup className="eachFormGroup">
                  <Label htmlFor="inputUserName" className="subText">User Name:  </Label>
                  <Input onChange={this.handleFieldChange}
                      required="" autoFocus="" type="user_name" name="user_name" id="user_name" placeholder="Your Cool Astro Name" />
              </FormGroup>
              <FormGroup className="eachFormGroup">
                  <Label htmlFor="inputPassword" className="subText">Password:   </Label>
                  <Input onChange={this.handleFieldChange} type="password"
                      required="" type="password" name="password" id="password" placeholder="Don't Forget!" />
              </FormGroup>
              <Button className="submit">Login</Button>
          </Form>
          </div>
          </div>
          </>
          );
      }
  }

export default withRouter(Login)