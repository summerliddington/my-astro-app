    import React, { Component } from 'react'
    import MyCollectivesCard from './MyCollectivesCard'
    import GroupManager from '../../modules/GroupManager'
    import {withRouter} from 'react-router-dom'

    class MyCollectivesList extends Component {

        state = {
            groups: [],
            group_name: "",
            userId: ""
        }

        currentUserId = parseInt(sessionStorage.getItem("userId"))

        deleteGroup = id => {
            GroupManager.delete("groups", id)
            .then(() => {
              GroupManager.getAll("groups")
              .then((groups) => {
                this.setState({
                    groups: groups
                })
              })
            })
          }

        getData = () => {
            GroupManager.getWithUserId(this.currentUserId)
            .then((groups) => {
                this.setState({
                    groups: groups
            })
        })
    }

    componentDidMount(){
        GroupManager.getWithUserId(this.currentUserId)
        .then((groups) => {
            this.setState({
                groups: groups
            })
        })
    }

    render(){

        return(
            <>

            <section className="myCollectivesList">
            <h1>My Collective List</h1>
                <button type="button"
                className="newButton"
                onClick={() => {this.props.history.push("/new")}}>New Collective</button>

            <div className="myCollectivesListContent">
                {this.state.groups.map(group =>
                    <MyCollectivesCard
                        key={group.id}
                        group={group}
                        getData={this.getData}
                        userId={group.userId}
                        {...this.props}
                        deleteGroup={this.deleteGroup}/>)}
            </div>
            </section>
            </>
        )
    }
}

export default withRouter(MyCollectivesList)
