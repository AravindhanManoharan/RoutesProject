import React from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './React Components/user/usersHooks';
import Posts from './posts/posts'
import UserPostsDetailTable from './posts/userPostsDetailTable'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './homeHooks';
import PostsStyle from './posts/posts_style'
function App() {
  return (
    <Router>
        <Switch><Route path="/" component={Home} exact={true}></Route>
          <Route path="/user" component={Users} exact={true}></Route>
          <Route path="/user/:id/:name/posts" component={Posts}></Route></Switch>

        {/* <Users></Users> */}
        <br></br>
        {/* <Posts></Posts> */}
    </Router>


  );
}

export default App;
