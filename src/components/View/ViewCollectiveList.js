import React, { Component } from 'react'
import ViewCollectiveCard from './ViewCollectiveCard'
import GroupManager from '../../modules/GroupManager'
import FriendsManager from '../../modules/FriendsManager'
import AddMoreFriendsList from './AddMoreFriendsList'
import './ViewCollective.css'

//CURRENT GROUP WITH COORDINATING GROUPUSERS, CAN DELETE GROUP USERS ONLY

class ViewCollectiveList extends Component {
    state = {
        group_name: "",
        groupId: "",
        userId: "",
        users: "",
        sunsign: "",
        groupUsers: []
    }

    getData = () => {
        FriendsManager.getGroupUsers(parseInt(this.props.match.params.groupId))
        .then((groupUsers) => {
            this.setState({
                groupUsers: groupUsers,
                group_name: groupUsers.group_name
        })
    })
    }
    updateCurrentGroupUserState = () => {
        FriendsManager.getGroupUsers(parseInt(this.props.match.params.groupId))
        .then((groupUsers) => {
            this.setState({
                groupUsers: groupUsers

            })
        })
    }
    componentDidMount(){
        let newState = {}
      GroupManager.get(parseInt(this.props.match.params.groupId))
      .then((group) => {
          newState.group_name = group.group_name
          newState.groupId = group.id
          newState.userId = group.userId
      })
      .then(() => FriendsManager.getGroupUsers(parseInt(this.props.match.params.groupId)))
      .then((groupUsers) => newState.groupUsers = groupUsers)
      .then(() => this.setState(newState))
    }

    render(){
        return(
            <>
            <div className="view-collective-container">
            <h3>Name: {this.state.group_name} </h3>
            </div>
            <div className="view-collective-cards">
                {this.state.groupUsers.map(groupUsers =>
                    <ViewCollectiveCard
                            key={groupUsers.id}
                            groupUsers={groupUsers}
                            getData={this.getData}
                            {...this.props} />)}
            <div className="friends-to-add-cards">
            <h3>Friends to Add To Group</h3>
                    <AddMoreFriendsList
                     updateCurrentGroupUserState={this.updateCurrentGroupUserState}
                    key={this.state.groupId}
                    groupId={this.state.groupId} />
            </div>
            </div>
            </>
        )
    }
}

export default ViewCollectiveList