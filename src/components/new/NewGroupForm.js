import React, { Component } from 'react';
import GroupManager from '../../modules/GroupManager';

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
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input type="text" required onChange={this.handleFieldChange} id="group_name" placeholder="Collective Name"/>
                        <label htmlFor="group_name">Name</label>
                    </div>
                    <div className="alignRight">
                        <button
                        type="button"
                        onClick={this.constructNewGroup}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
        )
    }
}

export default NewGroupForm