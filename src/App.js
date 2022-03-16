
import React, {useState}  from "react";
import { hot } from 'react-hot-loader/root';
import PostList from "./PostList";
import RegisterForm from "./RegisterForm";
import LogInForm from "./LogInForm";
import PostForm from "./PostForm";

  


const App = (props) => {
  const { name } = props;
  const [token, setToken] = useState(localStorage.getItem('access_token') ? localStorage.getItem('access_token') : null);
 
  // const isLoggedIn = () => {
  //   if (token) {return true}
  //   return false;
  // };



  return (

    <>
      <h1>Welcome, {name}</h1>
      <RegisterForm token={token} setToken={setToken} />
      <LogInForm token={token} setToken={setToken} />
      <PostForm token={token} setToken={setToken} />
      <PostList />

      
    </>
  );
}

export default hot(App);
