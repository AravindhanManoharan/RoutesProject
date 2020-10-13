import React, { useEffect, useState } from 'react'
import { getUserDataAction } from '../../Redux/actions/userDetailActions'
import { connect } from 'react-redux'
import UserDetailTable from './userDetailTable';

const Users = props => {

    const [name, setName] = useState('No name found')

    // ComponentDidMount - It takes one callback function as it's first parameter and empty array as its second parameter
    useEffect(() => {
        console.log('in hooks component did mount',name)
        setTimeout(()=> setName('Gokul'),100)
        props.dispatch(getUserDataAction())
    }, [])

    //componentDidUpdate - It takes one callback function as it's first parameter and array of value(s) on which this useEffect should happen. 
    useEffect(() => {
        console.log('in hooks component did update - userDetailData', props.userDetailData)
    }, [props.userDetailData])

    useEffect(() => {
        console.log('in hooks component did update - name', name)
    }, [name])

    //componentWillUnmount - It takes one callback function as it's first parameter which returns another function
    useEffect(() => {
        const func = () => {
            // Anything in here is fired on component unmount.
            console.log('in users hooks component will unmount')
        }
        return func
    }, [])



    return (
        <div>
            <h2>USER LIST</h2>
            <h3>{name}</h3>
            { console.log('in render') }

            <UserDetailTable></UserDetailTable>

        </div>
    )
}

const mapStatetoProps = state => {
    return {
        userDetailData: state.userDetail
    }

}

export default connect(mapStatetoProps)(Users);