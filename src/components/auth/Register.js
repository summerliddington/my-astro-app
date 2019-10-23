import React, { Component } from "react"
import LoginManager from '../../modules/LoginManager'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


class Register extends Component {

  // Set initial state
  state = {
    user_name: "",
    password: "",
    birthday: ""
  };

  handleFieldChange = (event) => {
    const stateToChange = {}
    stateToChange[event.target.id] = event.target.value
    this.setState(stateToChange)
  }

  handleRegister = (e) => {
    e.preventDefault()
    LoginManager.getUserData().then((users) => {
      let validate = users.find(user => user.user_name.toLowerCase() === this.state.user_name.toLowerCase())

      if (this.state.user_name === "") {
        window.alert("Please enter a username")
      } else if (this.state.password === "") {
        window.alert("Please enter a password")
      } else if (this.state.birthday === "") {
        window.alert("Please enter a valid birthday")
      } else if (validate) {
        window.alert("username already exists")
      } else {
        let newUser = {
          user_name: this.state.user_name,
          password: this.state.password,
          birthday: this.state.birthday
        };
        LoginManager.createUser(newUser)
          .then((createdUser) => {
            //This determines which page you land on upon registration
            this.props.setUser(createdUser)
          }
          )
      }
    }
    )
  }

  render() {
    return (
      <>
        <div className="logRegForm">
          <h3 className="logRegTitle">Register</h3>
          <Form onSubmit={this.handleRegister} inline>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label htmlFor="user_name" className="mr-sm-2">Name:</Label>
              <Input onChange={this.handleFieldChange} type="user_name"
                id="user_name"
                placeholder="User Name"
                required="" autoFocus="" />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label htmlFor="birthday" className="mr-sm-2">Birthday:</Label>
              <Input onChange={this.handleFieldChange} type="date"
                id="birthday"
                placeholder="month/day/year"
                required="" autoFocus="" />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label htmlFor="inputPassword" className="mr-sm-2">Password:</Label>
              <Input onChange={this.handleFieldChange} type="password"
                id="password"
                placeholder="Password"
                required="" />
            </FormGroup>
            <Button className="submit">Submit</Button>
          </Form>
        </div>
      </>
    )
  }
}

export default Register