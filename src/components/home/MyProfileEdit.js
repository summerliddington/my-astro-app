import React, { Component } from "react"
// import './LoginRegister.css'
import ProfileCardManager from "../../modules/ProfileCardManager"

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

    updateExistingUser = evt => {
      evt.preventDefault()
      this.setState({ loadingStatus: true });
      const editedUser = {
        user_name: this.state.user_name,
          password: this.state.password,
          birthday_month: this.state.birthday_month,
          birthday_day: this.state.birthday_day,
          sunsignId: this.state.sunsignId
      };

      ProfileCardManager.update(editedUser)
      .then(() => this.props.history.push("/"))
    }

//     componentDidMount() {
//       EmployeeManager.getAll()
//       .then(allEmployees => {
//         AnimalManager.get(this.props.match.params.animalId)
//         .then(animal => {
//             this.setState({
//               animalName: animal.name,
//               birthday_month: animal.birthday_month,
//               employeeId: animal.employeeId,
//               employees: allEmployees,
//               loadingStatus: false,
//             });
//         });
//     })
// }

    render() {
      return (
        <>
        <form>
          <fieldset>
            <div className="formgrid">
              <input type="text" required className="form-control"
                onChange={this.handleFieldChange}
                id="user_name"
                value={this.state.user_name}
              />
              <label htmlFor="user_name">User Name</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="birthday_month"
                value={this.state.birthday_month}
              />
              <label htmlFor="birthday_month">Birthday Month</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="birthday_day"
                value={this.state.birthday_day}
              />
              <label htmlFor="birthday_month">Birthday Day</label>


            </div>
            <div className="alignRight">
              <button
                type="button"
                onClick={this.updateExistingUser}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
        </>
      );
    }
}

export default MyProfileEdit