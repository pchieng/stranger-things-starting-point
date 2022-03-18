
import React, {useState, useEffect}  from "react";
import { hot } from 'react-hot-loader/root';
import PostList from "./PostList";
import RegisterForm from "./RegisterForm";
import LogInForm from "./LogInForm";
import PostForm from "./PostForm";
import { testAuthentication } from "./api";

  


const App = (props) => {
  const { name } = props;
  const [token, setToken] = useState(localStorage.getItem('access_token') ? localStorage.getItem('access_token') : null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [posts, setPosts] = useState([]);
  const [message, setMessages] = useState([]);
  

  async function isValidJWT() {
    const token = localStorage.getItem("access_token");
    if (!token) setIsLoggedIn(false);
    else {
      const isValid = await testAuthentication(token);
      setIsLoggedIn(isValid);
    }
  }



  useEffect(() => {
    isValidJWT();
  }, []);
  
  
  console.log("Is Logged In", isLoggedIn)



  return (

    <>
      <h1>Welcome, {name}</h1>
      <RegisterForm token={token} setToken={setToken} />
      <LogInForm setToken={setToken} />
      <button
        onClick={() => {
          localStorage.removeItem("access_token");
        }}
      >Log Out</button>
      <PostForm posts={posts} setPosts={setPosts} />
      {isLoggedIn ? <PostList posts={posts} setPosts={setPosts} message={message} setMessages={setMessages} /> : <p> Please log in </p>}

      
    </>
  );
}

export default hot(App);
