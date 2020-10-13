const initUserPostsDetail=[]

const userPostsDetailReducer = (state=initUserPostsDetail,action)=>{
    switch(action.type){
        case 'USER-POSTS-DETAIL-ADD':
        return action.payload;
        break;
        default:
            return state
    }
}

export default userPostsDetailReducer