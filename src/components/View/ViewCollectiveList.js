import React, { Component } from 'react'
import ViewCollectiveCard from './ViewCollectiveCard'
import GroupManager from '../../modules/GroupManager'
import FriendsManager from '../../modules/FriendsManager'

//CURRENT GROUP WITH COORDINATING GROUPUSERS, CAN DELETE GROUP USERS ONLY

class ViewCollectiveList extends Component {
    state = {
        group_name: "",
        groupId: "",
        userId: "",
        users: "",
        groupUsers: []
        }

    currentUserId = parseInt(sessionStorage.getItem("userId"))

    getData = () => {
        FriendsManager.getGroupUsers(parseInt(this.props.match.params.groupId))
        .then((groupUsers) => {
            this.setState({
                groupUsers: groupUsers,
                groupId: groupUsers.groupId

        })
    })
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
        this.getData()
    }
    render(){
        return(
            <>
            <div className="view-collective-container">
            <h3>Name: {this.state.group_name}</h3>
            </div>
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

export default ViewCollectiveList