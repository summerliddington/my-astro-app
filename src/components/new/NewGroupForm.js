import React, { Component } from 'react';
import GroupManager from '../../modules/GroupManager';
import './new.css'


class NewGroupForm extends Component {
    state = {
        group_name: "",
        userId: "",
        loadingStatus: true,
    };
    currentUserId = parseInt(sessionStorage.getItem("userId"))

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    constructNewGroup = evt => {
        evt.preventDefault();
        if (this.state.group_name === "") {
            window.alert("Please input a Collective Name");
        } else {
            this.setState({ loadingStatus: true });
        const newGroup = {
                group_name: this.state.group_name,
                userId: this.currentUserId
            };
        GroupManager.post(newGroup)
            .then((res) => this.props.history.push(`/newfriends/${res.id}`));
        }
    };

    render(){

        return(
            <>
            <div className="backgroundContainer">
            <form className="formDiv">
                    <div className="inputDiv">
                        <label className="group_name" htmlFor="group_name">Name: </label>
                        <input type="text" required onChange={this.handleFieldChange} id="group_name" placeholder="Collective Name"/>

                    </div>
                    <div>
                        <button
                        type="button" className="submit"
                        onClick={this.constructNewGroup}
                        >Submit</button>
                    </div>
            </form>
            </div>
        </>
        )
    }
}

export default NewGroupForm