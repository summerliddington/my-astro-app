import React, { Component } from 'react'
    //import the components we will need
    import JoinedCollectivesCard from './MyCollectivesCard'
    import ProfileCardManager from '../../modules/ProfileCardManager'

    class JoinedCollectivesList extends Component {

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
        console.log("JOINED COLLECTIVES LIST: ComponentDidMount");

        // ProfileCardManager.getAll()
        // .then((groups) => {
        //     this.setState({
        //         groups: groups
        //     })
        // })
    }

    render(){
        console.log("JOINED COLLECTIVES LIST: Render");

        return(
            <div className="container-cards">
                {this.state.groups.map(group =>
                    <JoinedCollectivesCard key={group.id}
                        group={group}
                        deleteGroup={this.deleteGroup}/>)}
            </div>
        )
    }
}

export default JoinedCollectivesList