
import React, {useState}  from "react";
import { hot } from 'react-hot-loader/root';
import PostList from "./PostList";
import RegisterForm from "./RegisterForm";
import LogIn from "./LogIn";

  


const App = (props) => {
  const { name } = props;
  const [token, setToken] = useState(localStorage.getItem('access_token') ? localStorage.getItem('access_token') : null);
  
 
  return (
    <>
      <h1>Welcome, {name}</h1>
      <RegisterForm   token={token} setToken={setToken}/>
      <LogIn />
      <PostList />

      
    </>
  );
}

export default hot(App);
