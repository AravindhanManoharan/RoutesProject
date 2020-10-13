import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function UserDetailTable(props) {
    return (
        <div>
            <table border='1px'>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                </tr>
                {
                    props.userDetailData.map(data => {
                        return (
                            
                                <tr>
                                    <td>{data.id}</td>
                                    <Link to={`/user/${data.id}/${data.name}/posts`}><td>{data.name}</td></Link>
                                </tr>


                        )
                    })
                }
            </table>
        </div>
    )
}

const mapStatetoProps = state => {
    console.log('usertdable', state)
    return {
        userDetailData: state.userDetail
    }
}

export default connect(mapStatetoProps)(UserDetailTable)