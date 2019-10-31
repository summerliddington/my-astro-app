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
        console.log("FRIEND LIST: ComponentDidMount");
        this.getData()
    }

    render(){
        console.log("Friend LIST: Render");

        return(
            <>
            <div className="friends-cards">
                {this.state.users.map(users =>
                    <FriendsCard
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
