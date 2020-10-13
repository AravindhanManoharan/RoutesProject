import React from 'react'
import { getUserDataAction } from '../../Redux/actions/userDetailActions'
import { connect } from 'react-redux'
import UserDetailTable from './userDetailTable'

class Users extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.dispatch(getUserDataAction())
    }

    render() {
        return (
            <div>
                <h2>USER LIST</h2>
                {
                    console.log('after mount', this.props.userDetailData)
                }
                <UserDetailTable></UserDetailTable>

            </div>
        )

    }
}
const mapStatetoProps = state => {
    return {
        userDetailData: state.userDetail
    }

}

export default connect(mapStatetoProps)(Users);