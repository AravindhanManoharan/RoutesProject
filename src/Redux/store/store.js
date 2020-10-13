import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import userDetailReducer from '../reducers/userDetailReducer';
import userPostsDetailReducer from '../reducers/userPostsDetailReducers';



const rootReducer = combineReducers({
    userDetail: userDetailReducer,
    userPostsDetail: userPostsDetailReducer

})

const configureStore = () =>{
    const store = createStore(rootReducer, applyMiddleware(thunk))
    return store
}

export default configureStore;