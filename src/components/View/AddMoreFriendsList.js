import React, { Component } from 'react'
    import AddMoreFriendsCard from './AddMoreFriendsCard'
    import FriendsManager from '../../modules/FriendsManager'


    class AddMoreFriendsList extends Component {
        state = {
            users: [],
            user_name: ""
        }
          getData = () => {
            FriendsManager.getAll()
            .then((users) => {
                this.setState({
                    users: users
                })
            })
          }
    componentDidMount(){
        this.getData()
    }

    render(){
        return(
            <>
            <div className="addMoreFriendsList">
                {this.state.users.map(users =>
                    <AddMoreFriendsCard
                        updateCurrentGroupUserState={this.props.updateCurrentGroupUserState}
                        key={users.id}
                        users={users}
                        user_name={users.user_name}
                        groupId={this.state.groupId}
                        getData={this.getData}
                        {...this.props}/>)}
            </div>
            </>
        )
    }
}

export default AddMoreFriendsList