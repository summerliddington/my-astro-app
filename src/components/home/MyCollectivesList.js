    import React, { Component } from 'react'
    import MyCollectivesCard from './MyCollectivesCard'
    import GroupManager from '../../modules/GroupManager'
    import {withRouter} from 'react-router-dom'

    class MyCollectivesList extends Component {

        state = {
            groups: [],
        }
        deleteGroup = id => {
            GroupManager.delete(id)
            .then(() => {
              GroupManager.getAll()
              .then((groups) => {
                this.setState({
                    groups: groups
                })
              })
            })
          }

        getData = () => {
            GroupManager.getAll()
            .then((groups) => {
                this.setState({
                    groups: groups
            })
        })
    }

    componentDidMount(){
        this.getData()
    }
    render(){
        console.log("MY COLLECTIVES LIST: Render");

        return(
            <>
            <h1>My Collective List</h1>
            <section className="group-section">
                <button type="button"
                className="btn"
                onClick={() => {this.props.history.push("/new")}}>New Collective</button>
            </section>
            <div className="container-cards">
                {this.state.groups.map(group =>
                    <MyCollectivesCard
                        key={group.id}
                        group={group}
                        getData={this.getData}
                        {...this.props}
                        deleteGroup={this.deleteGroup}/>)}
            </div>
            </>
        )
    }
}

export default withRouter(MyCollectivesList)
