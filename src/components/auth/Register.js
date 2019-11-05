import React, { Component } from "react"
import LoginManager from '../../modules/LoginManager'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './LoginRegister.css'


class Register extends Component {

  state = {
    user_name: "",
    password: "",
    birthday_month: "",
    birthday_day: "",
    sunsignId: ""
  };

  handleAstroSign = () => {
    let sunsignId = ""
   return LoginManager.getAstroData().then(res => {
      res.filter( sign => sign.start === this.state.birthday_month || sign.end === this.state.birthday_month)
      .forEach(month => {
        if(month.start === this.state.birthday_month && parseInt(this.state.birthday_day) >= month.startday ){
          sunsignId = month.id
        }
      else if (month.end === this.state.birthday_month && parseInt(this.state.birthday_day) <= month.endday ) {
        sunsignId = month.id
      }
      });
    }).then(() => this.setState({sunsignId: sunsignId}))
  }

  // Set initial state

  handleFieldChange = (event) => {
    const stateToChange = {}
    stateToChange[event.target.id] = event.target.value
    this.setState(stateToChange)
  }

  handleRegister = (e) => {
    e.preventDefault()
    this.handleAstroSign().then
    (() => LoginManager.getUserData().then((users) => {
      let validate = users.find(user => user.user_name.toLowerCase() === this.state.user_name.toLowerCase())

      if (this.state.user_name === "") {
        window.alert("Please enter a username")
      } else if (this.state.password === "") {
        window.alert("Please enter a password")
      } else if (this.state.birthday_month === "") {
        window.alert("Please enter a valid birthday month")
      } else if (this.state.birthday_day === ""){
        window.alert("Please enter a valid birthday day")
      } else if (validate) {
        window.alert("username already exists")
      } else {
        let newUser = {
          user_name: this.state.user_name,
          password: this.state.password,
          birthday_month: this.state.birthday_month,
          birthday_day: this.state.birthday_day,
          sunsignId: this.state.sunsignId
        };
        LoginManager.createUser(newUser)
          .then((createdUser) => {
            //This determines which page you land on upon registration
            this.props.setUser(createdUser)

          })
      }
    }
    ))
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
              <Label htmlFor="birthday_month" className="mr-sm-2">Birthday Month:</Label>
              <Input onChange={this.handleFieldChange} type="birthday_month"
                id="birthday_month"
                placeholder="month ex: April"
                required="" autoFocus="" />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label htmlFor="birthday_day" className="mr-sm-2">Birthday Day:</Label>
              <Input onChange={this.handleFieldChange} type="birthday_day"
                id="birthday_day"
                placeholder="day ex: 18"
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