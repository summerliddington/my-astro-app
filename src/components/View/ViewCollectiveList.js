import React, { Component } from 'react'
import ViewCollectiveCard from './ViewCollectiveCard'
import GroupManager from '../../modules/GroupManager'

class groupUsersList extends Component {
        state = {
        groups: "",
        groupUsers: [],
    }

    deleteGroupUser = id => {
        GroupManager.delete(id)
        .then(() => {
          GroupManager.getAll()
          .then((newGroupUsers) => {
            this.setState({
                groupUsers: newGroupUsers
            })
          })
        })
    }
    componentDidMount(){
        GroupManager.getAll()
          .then((newGroupUsers) => {
            this.setState({
                groupUsers: newGroupUsers
            })
        })
    }

    render(){
        return(
            <>
            <section className="section-content">
                <button type="button"
                    className="btn"
                    onClick={() => {this.props.history.push("/groupUsers/new")}}>
                    Admit groupUsers
                </button>
            </section>
            <div className="view-collective-cards">
                {this.state.groupUsers.map(groupUsers =>
                    <ViewCollectiveCard 
                            key={groupUsers.id}
                            groupUsers={groupUsers}
                            deletegroupUsers={this.deletegroupUsers}
                            {...this.props} />)}
            </div>
            </>
        )
    }
}

export default groupUsersList