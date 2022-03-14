
import React from "react";
import { hot } from 'react-hot-loader/root';
import PostList from "./PostList";
import RegisterForm from "./RegisterForm";

// const [token, setToken] = useState("");


const App = (props) => {
  const { name } = props;
  return (
    <>
      <h1>Welcome, {name}</h1>
      <RegisterForm  />
      <PostList />
    </>
  );
}

export default hot(App);
