import React from 'react'
import {Link} from 'react-router-dom'

class Home extends React.Component{
    constructor(){
        super();
        this.state = {
            homeFlag:true
        }
    }
    handleClick =()=>{
        this.setState({
           homeFlag: false
        })
    }
render(){

    return(
        <div>
            {
            this.state.homeFlag &&  <Link to={`/user`} onClick={this.handleClick}><h3>Welcome to world of React-js</h3></Link>
            
            }
        </div>
    )
}
    
}

export default Home