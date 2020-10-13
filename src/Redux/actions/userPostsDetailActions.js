import axios from 'axios';

export const userPostsDetailAddAction=(payload) =>{
return{
    type:'USER-POSTS-DETAIL-ADD',
    payload
}
}

export const getUserPostsDetailAction = ()=>{

return(dispatch) => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(response => 
    dispatch(userPostsDetailAddAction(response.data)))
}

}

