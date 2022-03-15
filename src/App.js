
import React, {useState, useEffect}  from "react";
import { hot } from 'react-hot-loader/root';
import PostList from "./PostList";
import RegisterForm from "./RegisterForm";

  


const App = (props) => {
  const { name } = props;
  const [token, setToken] = useState(localStorage.getItem('access_token') ? localStorage.getItem('access_token') : null);
  useEffect(()=>{console.log(token)}, [])
 
  return (
    <>
      <h1>Welcome, {name}</h1>
      <RegisterForm   token={token} setToken={setToken}/>
      <PostList />
    </>
  );
}

export default hot(App);
