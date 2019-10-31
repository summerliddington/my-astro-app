    import React, { Component } from 'react'
    import FriendsCard from './FriendsCard'
    import FriendsManager from '../../modules/FriendsManager'


    class FriendsList extends Component {
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
            <div className="friends-cards">
                {this.state.users.map(users =>
                    <FriendsCard
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

export default FriendsList
