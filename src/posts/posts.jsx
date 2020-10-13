import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { getUserPostsDetailAction } from '../Redux/actions/userPostsDetailActions'
import UserPostsDetailTable from './userPostsDetailTable'

class Posts extends React.Component {
    constructor(props) {
        super();
    }

    componentDidMount() {
        setTimeout(()=> {
            this.props.dispatch(getUserPostsDetailAction()) 
        },2000)
    }

    render() {
        return (
            <div>
                {
                    console.log('posts something', this.props.userPostsDetail)
                }
                <h2 class="container">POSTS DETAILS</h2>
                <UserPostsDetailTable id={this.props.match.params.id} name={this.props.match.params.name}></UserPostsDetailTable>
            </div>
        )
    }
}
const mapStatetoProps = state => {
    console.log('map', state)
    return {
        userPostsDetail: state.userPostsDetail
    }
}
export default connect(mapStatetoProps)(Posts)