
import React, { useState, useEffect } from "react";
import { hot } from 'react-hot-loader/root';
import PostList from "./PostList";
import RegisterForm from "./RegisterForm";
import LogInForm from "./LogInForm";
import PostForm from "./PostForm";
import { testAuthentication } from "./api";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import MessagesList from "./MessagesList";



const App = () => {
  const [token, setToken] = useState(localStorage.getItem('access_token') ? localStorage.getItem('access_token') : null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [posts, setPosts] = useState([]);
  const [message, setMessages] = useState([]);
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('');

  async function isValidJWT() {
    const token = localStorage.getItem("access_token");
    if (!token) setIsLoggedIn(false);
    else {
      const isValid = await testAuthentication(token);
      setIsLoggedIn(isValid);
    }
  }


  let userObject = {
    user: {
      username: username,
      password: password
    }
  }

  useEffect(() => {
    isValidJWT();
  }, []);


  return (

    <Router>
      <div id="navbar">
        <Link to="/">
          <a>HOME</a>
        </Link>

        <Link to="/posts">
          <a>POSTS</a>
        </Link>

        {isLoggedIn ?
          <Link to="/profile">
            <a>PROFILE</a>
          </Link>
          :
          null
        }

        {isLoggedIn ?
          <Link to="/">
            <a
              onClick={() => {
                localStorage.removeItem("access_token");
              }}>LOG OUT</a>
          </Link>
          :
          <Link to="/login">
            <a>LOG IN</a>
          </Link>}
      </div>


        <Route exact path="/">
          <h1>Welcome to Stranger&apos;s Things</h1>
        </Route>

        <Route path="/posts">
          <PostList posts={posts} setPosts={setPosts} message={message} setMessages={setMessages} />
        </Route>

        <Route path="/login">
          <LogInForm setToken={setToken} userObject={userObject} setUsername={setUsername} setPassword={setPassword} />
        </Route>

        <Route path="/register">
          <RegisterForm token={token} setToken={setToken} />
        </Route>

        <Route path="/createpost">
          <PostForm posts={posts} setPosts={setPosts} />
        </Route>

        <Route path="/profile">
          <MessagesList />
        </Route>




    </Router>
  );
}

export default hot(App);
