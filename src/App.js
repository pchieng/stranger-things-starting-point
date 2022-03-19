
import React, { useState, useEffect } from "react";
import { hot } from 'react-hot-loader/root';
import PostList from "./PostList";
import RegisterForm from "./RegisterForm";
import LogInForm from "./LogInForm";
import PostForm from "./PostForm";
import { testAuthentication } from "./api";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MessagesList from "./MessagesList";
import NavBar from "./NavBar";


const App = () => {
  const [token, setToken] = useState(localStorage.getItem('access_token') ? localStorage.getItem('access_token') : null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [posts, setPosts] = useState([]);
  const [message, setMessages] = useState([]);
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('');
  const [loggedInUsername, setLoggedInUsername] = useState('');

  async function isValidJWT() {
    const token = localStorage.getItem("access_token");
    if (!token) setIsLoggedIn(false);
    else {
      const isValid = await testAuthentication(token);
      setLoggedInUsername(isValid.data.user.username);
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
      
      <NavBar isLoggedIn={isLoggedIn} loggedInUsername={loggedInUsername} />
      
        <Route exact path="/">
          {isLoggedIn ?
          <h1>Welcome to Stranger&apos;s Things</h1>
          :
          <LogInForm setToken={setToken} userObject={userObject} setUsername={setUsername} setPassword={setPassword} />
        }
        </Route>

        <Route path="/posts">
          <PostList isLoggedIn={isLoggedIn} posts={posts} setPosts={setPosts} message={message} setMessages={setMessages} />
        </Route>

        <Route path="/register">
          <RegisterForm token={token} setToken={setToken} />
        </Route>

        <Route path="/createpost">
          <PostForm posts={posts} setPosts={setPosts} />
        </Route>

        <Route path="/messages">
          <MessagesList />
        </Route>




    </Router>
  );
}

export default hot(App);
