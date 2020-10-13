import axios from 'axios';

export const userDetailActionAdd = (payload) => {
    console.log('action', payload);
    return {

        type: 'USER-DETAIL-ACTION-ADD',
        payload
    }
}

export const getUserDataAction = () => {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(response =>
            dispatch(userDetailActionAdd(response.data))).catch(err => console.log(err))
    }
}

export const deleteUserDataAction = (id) => {
    return (dispatch) => {
        axios.delete('https://jsonplaceholder.typicode.com/users', id).then(response =>
            dispatch(userDetailActionAdd(response.data)))
    }
}