import React, { Component } from 'react'
import ViewCollectiveCard from './ViewCollectiveCard'
import GroupManager from '../../modules/GroupManager'
import FriendsManager from '../../modules/FriendsManager'
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
    .then(() => FriendsManager.getFriendSign
            (this.state.sunsignId.sunsign))
              .then(sunsignId => {
                this.setState({
              sunsignId: sunsignId,
              sunsign: sunsignId.sunsign
        })})
}

    // deleteGroupUser = id => {
    //     GroupManager.delete(id)
    //     .then(() => {
    //       GroupManager.getAll()
    //       .then((newGroupUsers) => {
    //         this.setState({
    //             groupUsers: newGroupUsers
    //         })
    //       })
    //     })
    // }
    componentDidMount(){
        FriendsManager.getGroupUsers(parseInt(this.props.match.params.groupId))
        .then((groupUsers) => {
            this.setState({
                groupUsers: groupUsers
        })})
        .then(() => GroupManager.get(parseInt(this.props.match.params.groupId)))
        .then((group) => {
            this.setState({
                group: group,
                group_name: group.group_name
        })})
        .then(() => FriendsManager.getFriendSign
            (this.props.match.params.sunsignId))
              .then(sunsignId => {
                this.setState({
              sunsignId: sunsignId,

        })})

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
            </div>
            </>
        )
    }
}

export default ViewCollectiveList