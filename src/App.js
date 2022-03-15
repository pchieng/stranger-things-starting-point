
import React from "react";
import { hot } from 'react-hot-loader/root';
import PostList from "./PostList";
import RegisterForm from "./RegisterForm";





const App = (props) => {
  const { name } = props;
  // const [token, setToken] = useState("");
  // setToken(localStorage.getItem("access_token"));




  return (
    <>
      <h1>Welcome, {name}</h1>
      <RegisterForm   />
      <PostList />
    </>
  );
}

export default hot(App);
