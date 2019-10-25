import React, { Component } from 'react'
    //import the components we will need
    import MyCollectivesCard from './MyCollectivesCard'
    import ProfileCardManager from '../../modules/ProfileCardManager'

    class MyCollectivesList extends Component {
        //define what this component needs to render
        state = {
            groups: [],
        }
        deleteGroup = id => {
            ProfileCardManager.delete(id)
            .then(() => {
              ProfileCardManager.getAll()
              .then((groups) => {
                this.setState({
                    groups: groups
                })
              })
            })
          }
    componentDidMount(){
        console.log("MY COLLECTIVES LIST: ComponentDidMount");

        // ProfileCardManager.getAll()
        // .then((groups) => {
        //     this.setState({
        //         groups: groups
        //     })
        // })
    }

    render(){
        console.log("MY COLLECTIVES LIST: Render");

        return(
            <div className="container-cards">
                {this.state.groups.map(group =>
                    <MyCollectivesCard key={group.id}
                        group={group}
                        deleteGroup={this.deleteGroup}/>)}
            </div>
        )
    }
}

export default MyCollectivesList
