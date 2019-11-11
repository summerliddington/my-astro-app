import React, { Component } from "react"
// import './LoginRegister.css'
import ProfileCardManager from "../../modules/ProfileCardManager"
import LoginManager from '../../modules/LoginManager'

class MyProfileEdit extends Component {

    state = {
        user_name: "",
        password: "",
        birthday_month: "",
        birthday_day: "",
        sunsignId: ""
      };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    handleAstroSign = () => {
        let sunsignId = ""
       return LoginManager.getAstroData().then(res => {
           console.log(res)
          res.filter( sign => sign.start === this.state.birthday_month || sign.end === this.state.birthday_month)
          .forEach(month => {
            if(month.start === this.state.birthday_month && parseInt(this.state.birthday_day) >= month.startday ){
              sunsignId = month.id
            }
          else if (month.end === this.state.birthday_month && parseInt(this.state.birthday_day) <= month.endday ) {
            sunsignId = month.id
          }
          })
          console.log(sunsignId);
        }).then(() => this.setState({sunsignId: sunsignId}))
      }

    updateExistingUser = evt => {
      evt.preventDefault()
      this.handleAstroSign().then(() => {this.setState({ loadingStatus: true });
      console.log(this.state.sunsignId)
      const editedUser = {
          id: this.props.match.params.userId,
          user_name: this.state.user_name,
          password: this.state.password,
          birthday_month: this.state.birthday_month,
          birthday_day: this.state.birthday_day,
          sunsignId: this.state.sunsignId
      };
      console.log(editedUser)
      ProfileCardManager.update(editedUser)
      .then(() => this.props.history.push("/"))})

    }

    componentDidMount() {
        ProfileCardManager.get(this.props.match.params.userId)
        .then(user => {
            this.setState({
                user_name: user.user_name,
                  password: user.password,
                  birthday_month: user.birthday_month,
                  birthday_day: user.birthday_day,
                  sunsignId: user.sunsignId,
                  loadingStatus: false,
            });
        });
}

    render() {
      return (
        <>
        <form>
          <fieldset>
            <div className="pageContainer">
            <label className="subText" htmlFor="user_name">User Name:  </label>
              <input type="text" required className="subText"
                onChange={this.handleFieldChange}
                id="user_name"
                value={this.state.user_name}
              />

              <label className="subText" htmlFor="password">Password:  </label>
              <input type="text" required className="subText"
                onChange={this.handleFieldChange}
                id="password"
                value={this.state.password}
              />

              <label className="subText" htmlFor="birthday_month">Birthday Month:   </label>
              <input
                type="text"
                required
                className="subText"
                onChange={this.handleFieldChange}
                id="birthday_month"
                value={this.state.birthday_month}
              />

              <label className="subText" htmlFor="birthday_day">Birthday Day:   </label>
              <input
                type="text"
                required
                className="subText"
                onChange={this.handleFieldChange}
                id="birthday_day"
                value={this.state.birthday_day}
              />



            </div>
            <div className="btnDiv">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingUser}
                className="submit"
              >Submit</button>
            </div>
          </fieldset>
        </form>
        </>
      );
    }
}

export default MyProfileEdit