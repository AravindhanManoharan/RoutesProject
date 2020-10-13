import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Spinner } from "react-bootstrap"
import PostsStyle from './posts_style'
import PostsStyle1 from './posts_style1'

function UserPostsDetailTable(props) {
    return (
        <div>
            {
                console.log('params', props)
            }
            <div ><h4 class="container" >Author: {props.name}</h4></div>
            
            {
                //props.match.params.id
                props.userPostsData.length === 0 ? <Spinner animation="grow" variant="dark" /> :
                    props.userPostsData.filter(posts => posts.userId === Number(props.id)).map(data => {
                        return (
                            <div>
                                {/* <h4>Title: {data.title}</h4>
                                <p>Body : {data.body}</p>
                                <br></br>
                                <hr></hr> */}
                                <PostsStyle title={data.title} body={data.body} name={props.name} id={data.id}></PostsStyle>
                            </div>
                            // <tr>
                            //     <td>{data.userId}</td>
                            //     <td>{data.id}</td>
                            //     <td>{data.title}</td>
                            // </tr>
                        )
                    })
            }

            {/* <table border='1px'>
                <tr>
                    <th>UserID</th>
                    <th>ID</th>
                    <th>TITLE</th>
                </tr>

            </table> */}
            <Link to={`/user`} ><h5 class="container">GO BACK</h5></Link>
        </div>
    )
}

const mapStatetoProps = state => {
    return {
        userPostsData: state.userPostsDetail
    }
}

export default connect(mapStatetoProps)(UserPostsDetailTable)